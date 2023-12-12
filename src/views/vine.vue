<template>
  <div class="vine flex justify-center items-center flex-col p-15px">
<!--    <n-form label-placement="left">-->
<!--      <n-form-item required label="用户名称"><n-input v-model:value="fromData.name" ></n-input></n-form-item>-->
<!--      <n-form-item required label="密码"><n-input type="password" v-model:value="fromData.password" ></n-input></n-form-item>-->
<!--      {{fromData.time}}-->
<!--      <n-form-item required label="密码"><n-date-picker type="daterange" v-model:value="fromData.time" ></n-date-picker></n-form-item>-->
<!--    </n-form>-->
<!--    <n-button class="m-t-300px" type="primary" @click="validate">校验数据</n-button>-->
  </div>
</template>

<script setup lang="ts" title="数据验证器">
/**
 * @vinejs/vine 参考文档：
 * https://vinejs.dev/docs/introduction
 */
// import vine,{SimpleMessagesProvider} from "@vinejs/vine"
// import {createDiscreteApi} from "naive-ui"
// import {FieldContext} from "@vinejs/vine/build/src/types";
// const {message} = createDiscreteApi(['message'])
// const fromData = ref({})
// vine.messagesProvider = new SimpleMessagesProvider({
//   // "required":"字段【{{field}}】必填字段"
// },{
//   name:'用户名称',
//   password:'密码',
// })
// const validate = async ()=>{
//   try {
//     await vine.validate({
//       schema:vine.object({
//         name:vine.string().minLength(1),
//         password:vine.string().minLength(1),
//       }).merge(vine.group([
//           vine.group.if((d, f:FieldContext)=>{
//             if(!vine.helpers.isArray(d.time)){
//               return  f.report('时间格式错误','asa', f)
//             }
//             d.startTime = d.time[0]
//             d.endTime = d.time[1]
//             return true
//           },{})
//       ])),
//       data:fromData.value
//     })
//     console.log(fromData.value)
//     message.success('校验成功')
//   }catch (err){
//     message.error(err.messages?.[0]?.message || err.message)
//   }
//
// }
</script>

<style scoped lang="less">
.vine {

}
</style>
