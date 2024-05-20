declare module "mockjs-async"{
    import * as Mockjs from "mockjs"
    export = Mockjs
}

declare module "protable" {
    interface FromArray{
        (selector:string,data:Array<Record<any, any>>, options:{
            contents:Record<any, (content:any)=> any>
        }):void
    }
    export const fromArray:FromArray
}

declare module "*.vue"{
    export  {}
}
