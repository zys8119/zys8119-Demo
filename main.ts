// import VConsoleHide from "vconsole-hide"
// new VConsoleHide()
import App from "./App.vue"
import route from "./route"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-fade';
import  "@/src/less/style.less"
import 'virtual:uno.css'
import './global'
route.beforeEach((to, from, next)=>{
    document.title = import.meta.env.DEV ? '本地测试' :`张云山-${to.meta.title || '个人博客'}`
    next()
})
const app = createApp(App)
.use(route)

app.config.errorHandler = (err)=>{
    console.info("[Error]", err)
}
import vueConsolePlug from "vue-console-plug"
import vueConsolePlugConfigs from "./logConfig"

import "questions-render/style.css"
import editor from "questions-render/editor"
editor()
import AA from "questions-render"
app.use(AA)

app.use(vueConsolePlug, vueConsolePlugConfigs)
import AutoConfig from "vitejs-plugin-config-auto-import"
app.use(AutoConfig)
// app.mount('#app')

declare module "vue-router"{
    interface RouteMeta {
        title:string
        content:string
    }
}
window.$webAutoDeploy = function (){
    console.log(1113333)
}
