import {RouteRecordRaw} from "vue-router";
export default [
    {
        path:"/:pathMatch(.*)*",
        component:()=> import("@/src/views/404.vue")
    },
] as RouteRecordRaw[]
