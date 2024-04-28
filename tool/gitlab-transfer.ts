import {Controller} from "@wisdom-serve/serve"
import {launch} from "puppeteer";
import * as ProgressBar from "progress";
import debug from "debug";
import axios, {AxiosRequestConfig} from "axios";
import {data as dataProjectsJson} from "./FeHelper-20240426152409.json";
import {merge} from "lodash";
const _debug = debug('gitlab-transfer');

/**
 * gitlab跨版本升级仓库迁移
 * 请求方式 http://localhost:82/gitlab-transfer?c_username=&c_password=&cookie=
 */
export default (async function (){
    const projects = JSON.parse(JSON.stringify(dataProjectsJson)).slice(0, 20)
    // 旧项目地址
    const bar = new ProgressBar('迁移进度 [:bar] :current/:total :rate/bps :percent :etas', { total: projects.length,clear:false, width:810});
    const log = function(...arg:any[]){
        _debug('booting %o', ...arg)
    }
    const browser = await launch({
        // headless:false,
        // devtools:true,
        // slowMo:5,
        defaultViewport:{
            width:0,
            height:0
        },
    })

    try {
        const page = await browser.newPage()
        page.on("close", async ()=>{
            await browser.close()
        })
        // 新仓库地址
        const gitlabHost = "http://192.168.110.132"
        // 登录成功
        log("正在登录中")
        await page.goto(gitlabHost)
        if(this.$query.get('cookie')){
            log("cookie登录中")
            // cookie 登录
            const cookie = this.$query.get('cookie');
            const cookies = cookie.split("; ")
                .map(e=>e.split('='))
                .reduce((a:any,b:any)=>{
                    a.push({
                        name:b[0],
                        value:b[1]
                    })
                    return a
                } ,[])
            await page.setCookie(...cookies)
        }else {
            // 账号密码登录
            log("账号密码登录中")
            if(!this.$query.get('username') || !this.$query.get('password')){
                await browser.close()
                return this.$error("账号密码错误！请先提供账号密码！")
            }
            await page.type("#user_login",this.$query.get('username'))
            await page.type("#user_password",this.$query.get('password'))
            await page.click("body > div.gl-h-full.gl-display-flex.gl-flex-wrap > div.container.gl-align-self-center > div > div.gl-my-5 > div.gl-w-full.gl-sm-w-half.gl-ml-auto.gl-mr-auto.bar > div > form > button")
        }

        if(!this.$query.get('c_username') || !this.$query.get('c_password')){
            await browser.close()
            return this.$error("迁移账号密码错误！请先提供需要迁移的账号密码！")
        }
        log("登录成功")
        const importProjectExec = async (projectInfo:any)=>{
            // 导入项目
            log("开始导入项目:",`${gitlabHost}/projects/new#import_project`)
            await page.goto(`${gitlabHost}/projects/new#import_project`)
            await page.click('button[data-platform="repo_url"]')
            log("仓库信息：")
            log(projectInfo)
            log("仓库地址：",projectInfo.http_url_to_repo)
            // await page.type('#project_name',projectInfo.name || '')
            // await page.type('#project_path',projectInfo.path || '')
            await page.type('#project_import_url',projectInfo.http_url_to_repo)
            await page.type('#project_import_url_user',this.$query.get('c_username'))
            await page.type('#project_import_url_password',this.$query.get('c_password'))
            await page.type('#project_description',projectInfo.description || '')
            log("基本信息完成")
            log("获取项目命名空间")
            //项目命名控件设置：project_namespace_id
            // try {
            //     await page.waitForSelector("#import-url-name>.form-group:last-child>.form-group>.input-group .group-namespace-dropdown")
            // }catch (e){
            //     //
            // }
            // try {
            //     await page.click("#import-url-name>.form-group:last-child>.form-group>.input-group .group-namespace-dropdown>div>button")
            // }catch (e){
            //     //
            // }

            await page.evaluate(async ()=>{
                const els:any = document.querySelectorAll("div[id*=dropdown-toggle-btn-]")
                els[3]?.click?.()
            })
            const data = await page.evaluate(async (gitlabHost:string)=>{
                const xCsrfToken = document.querySelector("meta[name=csrf-token]")?.getAttribute?.('content')
                return await fetch(`${gitlabHost}/api/graphql`, {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "zh-CN,zh;q=0.9",
                        "content-type": "application/json",
                        "x-csrf-token": xCsrfToken,
                        // "x-gitlab-feature-category": "groups_and_projects",
                        // "x-gitlab-version": "16.11.0"
                    },
                    "referrer": "http://192.168.110.132/projects/new",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": "{\"operationName\":\"searchNamespacesWhereUserCanCreateProjects\",\"variables\":{\"search\":\"\"},\"query\":\"query searchNamespacesWhereUserCanCreateProjects($search: String) {\\n  currentUser {\\n    id\\n    groups(permissionScope: CREATE_PROJECTS, search: $search) {\\n      nodes {\\n        id\\n        fullPath\\n        name\\n        visibility\\n        webUrl\\n        __typename\\n      }\\n      __typename\\n    }\\n    namespace {\\n      id\\n      fullPath\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                }).then(res=>res.json());
            },gitlabHost)
            log("currentUser：",data)
            const groups = data?.data?.currentUser?.groups?.nodes;
            log(groups)
            log(projectInfo)
            const groupsUserId = groups.find(e=>e.fullPath?.toLocaleLowerCase?.() === projectInfo?.namespace?.full_path?.toLocaleLowerCase?.())?.id
            const full_path_groups:any[] = projectInfo?.namespace?.full_path?.split('/');
            // if(full_path_groups.length > 1){
            //     full_path_groups.pop()
            // }
            log("groupsUserId：",groupsUserId)
            log("full_path_groups：",full_path_groups)
            if(!groupsUserId && projectInfo?.namespace?.kind === 'group'){
                log("组不存在，开始自动创建组")
                /// 创建组
                let index = 0
                while (index < full_path_groups.length){
                    const groupName = full_path_groups[index]
                    log("正在创建组",groupName)
                    if(index > 0){
                        await page.goto(`${gitlabHost}/${full_path_groups.slice(0,index).join("/")}`)
                        await page.click('#content-body > div.group-home-panel > div > div.home-panel-buttons.gl-display-flex.gl-justify-content-md-end.gl-align-items-center.gl-flex-wrap.gl-gap-3 > div:nth-child(3) > a')
                    }else {
                        await page.goto(`${gitlabHost}/groups/new#create-group-pane`)
                    }
                    await page.type('#group_name', groupName)
                    await page.click('#new_group button[data-testid="create-group-button"]')
                    index += 1
                    log(groupName, "创建组完成",)
                }
                return await importProjectExec(projectInfo)
            }
            const userId = groupsUserId || data?.data?.currentUser?.namespace.id;
            log("当前仓库所属组",userId)
            const namespaceSelector = `.gl-new-dropdown-item[data-testid~="listbox-item-${userId}"]`
            try {
                await page.waitForSelector(namespaceSelector)
            }catch (e) {
                // asd
            }
            try {
                await page.click(namespaceSelector)
            }catch (e) {
                // asd as
            }
            await page.evaluate(async (namespaceSelector)=>{
                const els:any = document.querySelector(namespaceSelector)
                els?.click?.()
            },namespaceSelector)
            await page.evaluate(async (namespaceSelector)=>{
                const els:any = document.querySelector(namespaceSelector)
                els?.click?.()
            },'#new_project > button')
            await page.waitForNavigation()
            //
            log("创建项目完成，仓库地址：",projectInfo.http_url_to_repo)
        }
        let index = 0
        while (index < projects.length){
            try {
                await importProjectExec(projects[index])
                projects[index].importProjectFail = false
            }catch (e) {
                console.log(e)
                projects[index].importProjectFail = true
            }
            bar.tick();
            index += 1
        }
        await browser.close()
        log("迁移任务完成关闭浏览器：")
        const completeLng = projects.filter(e=>!e.importProjectFail).length;
        const failLng = projects.filter(e=>e.importProjectFail).length;
        const failUrls = projects.filter(e=>e.importProjectFail).map(e=>e.http_url_to_repo);
        log(`本次迁移：成功(${completeLng})、失败(${failLng})`)
        log(`失败仓库如下：`)
        log(failUrls)
        this.$success({
            projects,
            completeLng,
            failLng,
            failUrls,
            message:"迁移任务完成"
        })
    }catch (e){
        log("迁移失败！")
        console.error(e)
        this.$error(e.message)
        await browser.close()
    }

} as Controller)

/**
 * 获取GitLab项目列表
 * @param access_token 仓库访问令牌
 */
export const getGitLabProjects:Controller = async function (){
    if(!this.$query.get("access_token")){
        return this.$error("请输入access_token")
    }
    if(!this.$query.get("host")){
        return this.$error("请输入host")
    }
    const options:AxiosRequestConfig = {
        url:`${this.$query.get('host')}/api/v4/projects`,
        method:"get",
        params:{
            // search:"",
            access_token:this.$query.get("access_token"),
        }
    }
    const res = await axios(options)
    const total = Number(res.headers["x-total"])
    const per_page = 100
    const pages = Math.ceil(total / per_page)
    const data = (await Promise.all(new Array(pages).fill(0).map(async (e, k)=>{
        return await axios(merge(options, {
            params:{
                per_page,
                page:k+1,
            }
        } as Partial<AxiosRequestConfig>)).then(res=>res.data)
    }))).reduce((a:any[],b:any)=>a.concat(b),[])
    this.$success(data
        //.map(e=>e.http_url_to_repo)
    )
} as Controller
