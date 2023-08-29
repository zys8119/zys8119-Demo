import {UserConfig } from 'vue-console-plug'
let ws:WebSocket = null as unknown as WebSocket
//深拷贝数据
export const deepCopy:any = function(data:any) {
    let cache:any = []
    const result = JSON.stringify(typeof data === 'number' ? data : (data || null), function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return
            }
            cache.push(value)
        }
        return value
    })
    cache = null
    return JSON.parse(result)
}
export default {
    consoleMap:['error'],
    eventMap: ['error', 'messageerror', 'unhandledrejection', 'rejectionhandled'],
    AxiosConfig:{
        // baseURL、method 必须设置string 才会上报
        baseURL:'http://127.0.0.1:40010',
        method:'post'
    },
    getCustomData(data, fp, app): Promise<any> {
        const up_post_data = {
            log:data,
            user_id:'' || fp.visitorId,
            user_tag:'' || '未知',
            type:data.type,
            //todo 请修改你的应用id
            app_id:'a18b6920-4645-11ee-a9ab-ffe219852c5e',
            project_version:'v1.0.0',
        }
        const config = {
            url:data.type === 'PV' ? '/log/pv' : '/log/up',
            data: up_post_data
        }
        if (ws && ws.readyState === ws.OPEN) {
            ws.send(JSON.stringify({
                emit:'connect-send',
                data:up_post_data
            }))
        }
        if (data.type === 'PV') {
            ws = new WebSocket(`${this.config.AxiosConfig.baseURL.replace(/(^.+)\/\//, `ws${(location.protocol || '').includes('https') ? 's' : ''}://`)}/websocket/`)
            ws.addEventListener('open', () => {
                console.log('连线WebSocket已连接')
                // 用户登录
                ws.send(JSON.stringify({
                    emit:'connect-login',
                    data:{
                        user_id:config.data.user_id,
                        user_tag:config.data.user_tag,
                        visitorId:config.data.log.visitorId,
                        app_id:config.data.app_id,
                        project_version:config.data.project_version
                    }
                }))
            })
            ws.addEventListener('message', ev => {
                let data:any = {}
                try {
                    data = JSON.parse(ev.data)
                } catch (e) {
                    // err
                }
                if (data.emit === 'connect-login-success') {
                    ws.send(JSON.stringify({
                        emit:'connect-send',
                        type:'user-connect-login-success',
                    }))
                }
                if (data.emit === 'connect-send' && data.type === 'debug') {
                    console.log((() => {
                        try {
                            return deepCopy(eval(`(${data.data})`))
                        } catch (e:any) {
                            return e.message
                        }
                    })())
                }
            })
            ws.addEventListener('close', () => {
                console.log('连线WebSocket已断开')
            })
        }
        return Promise.resolve(config)
    },
    install(app) {
        app.mount('#app')
    },
} as UserConfig<keyof WindowEventMap>
