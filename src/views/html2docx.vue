<template>
  <div class="html2docx p-15px">
    <table border="1" cellspacing="0" cellpadding="0">
      <thead>
      <tr>
        <th v-for="i in 3">asdas</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="i in 3">
        <td v-for="i in 3" style="color: #f00;font-size: 18px;font-weight: bold;">asdas</td>
      </tr>
      </tbody>
    </table>
    <n-button @click="save">asdasd</n-button>
  </div>
</template>

<script setup lang="ts">
import a from "html-docx-js"

declare const htmlDocx: typeof a
const save = async () => {
  const converted = htmlDocx.asBlob(document.querySelector('html').outerHTML);
  console.log(converted)
  const a = document.createElement('a')
  a.href = URL.createObjectURL(converted as Blob)
  a.download = "a.docx"
  a.click()
}
const a = {
  "password": "18957030325",
  "phoneNumber": "Zj123456@",
  "isH5": "1"
}
const b = {
  "BusinessData": {
    "query": {},
    "header": {
      "Content-Type": "application/json"
    },
    "body": {
      "method": "post",
      "url": "/v1/entry/apiuserloginnew/",
      "data": {
        "phone_number": "18957030325",
        "password": "Zj123456@",
        "is_h5": 1
      }
    }
  },
  "ProtocolData": {
    "api": "mgop.zjzj.qjdzyw.transformer"
  }
}
const c = {
  "BusinessData": {
    "query": {},
    "header": {},
    "body": {
      "password": "18957030325",
      "phoneNumber": "Zj123456@",
      "isH5": "1"
    }
  },
  "ProtocolData": {
    "api": "mgop.zjzj.qjdzyw.apiuserloginnew"
  }
}
</script>

<style scoped lang="less">
.html2docx {
  table {
    border: none;

    th {
      border-bottom: none;
      color: #ffff00;
    }
  }
}
</style>
