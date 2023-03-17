import App from "./App.vue"
import route from "./route"
import  "@/src/less/style.less"
const app = createApp(App)
.use(route)
app.config.errorHandler = (err)=>{
    console.info("[Error]", err)
}
app.mount('#app')
