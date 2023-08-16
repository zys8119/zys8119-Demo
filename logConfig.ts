import {UserConfig } from 'vue-console-plug'
export default {
    consoleMap:['error'],
    eventMap: ['error', 'messageerror', 'unhandledrejection', 'rejectionhandled', 'click'],
    AxiosConfig:{
        // baseURL、method 必须设置string 才会上报
        baseURL:'',
        method:'post'
    },
    getCustomData(data, fp, app): Promise<any> {
        return Promise.resolve({
            url:data.type === 'PV' ? '/log/pv' : '/log/up',
            data: {
                log:data,
                // user_id:user_id || fp.visitorId,
                // user_tag:user_tag || '未知',
                type:data.type,
                //todo 请修改你的应用id
                app_id:'<%= app_id %>',
                project_version:'v1.0.0',
            }
        })
    },
    install(app) {
        app.mount('#app')
    },
} as UserConfig<keyof WindowEventMap>
