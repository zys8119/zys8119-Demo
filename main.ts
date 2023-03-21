import App from "./App.vue"
import route from "./route"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-fade';
import  "@/src/less/style.less"
const app = createApp(App)
.use(route)
app.config.errorHandler = (err)=>{
    console.info("[Error]", err)
}
app.mount('#app')
