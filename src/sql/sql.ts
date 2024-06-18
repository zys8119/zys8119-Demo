import axios from "axios"
export default async function(sql:string,...data){
    return await axios({
        url:"http://127.0.0.1:81/sql",
        method: "post",
        data:{
            sql,
            data
        }
    }).then(res=>{
        if(res.data.code !== 200){
            return Promise.reject(res.data.data.err)
        }else {
            return res.data.data
        }
    }).catch(err=>{
        console.error(err)
    })
}
