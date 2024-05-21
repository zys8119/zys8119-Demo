import { obfuscate } from 'javascript-obfuscator';
import { Plugin } from 'vite';
import { createHash,randomBytes, createCipheriv, createDecipher } from 'crypto';
import { AES,enc,lib } from 'crypto-js';
const md5 = (message:string)=>createHash('md5').update(message).digest('hex');
const base64 = (message:string)=>Buffer.from(message, 'utf8').toString('base64');
let CODEINJECTIONWORKERCONTENTKEY:any;
let SERVEURL:any;
let secretValid: any = false;
export default {
    name: 'CODEINJECTIONWORKERCONTENTKEY',
    configResolved(config) {
        CODEINJECTIONWORKERCONTENTKEY = config.env.VITE_APP_SECRET
        SERVEURL = config.env.VITE_APP_SECRET_SERVE
        // 密码格式校验：（/密钥id（数据库id）/仓库名称/部署仓库/当前项目版本/当前部署的访问域名/项目访问有效期(baseg)/）每个信息md5加密后，用/连接起来，最后aes加密
        const secret = CODEINJECTIONWORKERCONTENTKEY;
        if(secret){
            const test = {
                //密钥id
                id:1,
                // 项目名称
                project:null,
                // 仓库地址
                git:null,
                //部署仓库
                deploy:null,
                //当前项目版本
                version:null,
                //当前部署的访问域名
                host:null,
                // 有效期为0则长期有效
                dalidity: null,
            }
            const a = AES.encrypt("asdas",'secret key 123').ciphertext.toString(enc.Hex)
            console.log(a);
            console.log(AES.decrypt(lib.CipherParams.create({ciphertext:enc.Hex.parse(a)}),'secret key 123').toString(enc.Utf8));
        }
        // if(CODEINJECTIONWORKERCONTENTKEY){
            secretValid = true
        // }
    },
    transform(code, id) {
        if(/vue.runtime.esm-bundler.js|vue.js/.test(id)){
            return `${obfuscate(`${code};(${(function(){
                const els = Array.from(document.querySelectorAll('*'));
                ;(function init(){
                    const vm:any = (els?.find((e:any)=>e.__vue_app__) as any)?.__vue_app__
                    if(!vm){
                        setTimeout(init)
                    }else {
                        const url = URL.createObjectURL(new Blob([CODEINJECTIONWORKERCONTENTKEY],{type:"application/javascript"}))
                        const worker = new Worker(url)
                        worker.onmessage = (e)=>{
                            vm.unmount()
                            alert(e.data || '项目无法启动，请联系管理员')
                        }
                        worker.postMessage({
                            location:JSON.stringify(window.location),
                        });
                    }
                })()
            }).toString()})()`,{
                // debugProtection:true,
                // debugProtectionInterval:1
            })}`.replace('CODEINJECTIONWORKERCONTENTKEY',`\`${ obfuscate(`(${(function(secret:string, serveUrl:string,secretValid:string){
                self.addEventListener('message',e=>{
                    if(secretValid === 'false'){
                        self.postMessage('密钥或密钥服务无效！')
                        return; 
                    };
                    try {
                        if(!secret || secret === "undefined" || !serveUrl || serveUrl === "undefined"){
                            self.postMessage('密钥或密钥服务无效！')
                            return
                        }
                        const _fetch = new Function('return fetch')()
                        const _fetchKey = ['method', 'headers',"Content-Type",'body','location','secret']
                        const data = {
                            [_fetchKey[0]]:"post",
                            [_fetchKey[1]]:{
                                [_fetchKey[2]]:"application/json; charset=utf-8"
                            },
                            [_fetchKey[3]]:JSON.stringify({
                                [_fetchKey[4]]:JSON.parse(e.data.location),
                                [_fetchKey[5]]:secret
                            })
                        }
                        _fetch(serveUrl,data).then((res:any)=>res.json()).then((res:any)=>{
                            if(res.code !== 200){
                                self.postMessage('无效密钥！')
                            }
                        }).catch(()=>{
                            self.postMessage('无效密钥！')
                        })
                    }catch (e) {
                        self.postMessage('无效密钥！')
                    }
                })
            }).toString()})('${CODEINJECTIONWORKERCONTENTKEY}','${SERVEURL}','${secretValid}')`,{
                forceTransformStrings:['fetch','method', 'headers',"Content-Type",'body','location','secret','无效密钥！','密钥或密钥服务无效！','stringify','postMessage','application','then','catch','parse','message','http']
            }).getObfuscatedCode()}\``)
        };
    },
} as Plugin
