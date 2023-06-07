import App from "./App.vue"
import route from "./route"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-fade';
import  "@/src/less/style.less"
import 'virtual:windi.css'
import 'virtual:windi-devtools'
route.beforeEach((to, from, next)=>{
    document.title = import.meta.env.DEV ? '本地测试' :`张云山-${to.meta.title || '个人博客'}`
    next()
})
const app = createApp(App)
.use(route)
app.config.errorHandler = (err)=>{
    console.info("[Error]", err)
}
app.mount('#app')

declare module "vue-router"{
    interface RouteMeta {
        title:string
        content:string
    }
}
