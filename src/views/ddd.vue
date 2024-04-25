<template>
  <div class="ddd">

  </div>
</template>

<script setup lang="ts">
import $ from 'jquery';
onMounted(() => {
  ;(function (url) {
    [
      {
        rule: /ddd/,
        callback: function () {
          var btn = $("<label><div>asda</div> <input type='file' hidden></label>")
          btn.find('input').on('change', function(e){
            var data = new FormData()
            console.log(this.files[0])
            data.append('file', this.files[0])
            console.log(data)
            $.ajax({
              url:'/api',
              method:"post",
              processData: false,  // Don't process the data
              contentType: false,  // Don't set contentType
              data:data,
              success: function(response) {
                // Handle success
                console.log(response);
              },
              error: function(xhr, status, error) {
                // Handle error
                console.error(xhr.responseText);
              }
            })

          })
          $('.ddd').before(btn)
        }
      }
    ].filter(e => e.rule.test(url)).forEach(e => e.callback())
  })(location.href)
//   var btn = $(`
// <div class="btn-group layout-btns" data-toggle="buttons-checkbox">
//       <button type="button" class="btn btn-default btn-sm layout-full">导入</button>
//     </div>
// `)
//   btn.click(function(){
//     console.log(11111)
//   })
//   $('#content-block > div.content-toolbar.btn-toolbar.pull-right.clearfix > div.btn-group.export').before(btn)
})
</script>

<style scoped lang="less">
.ddd {

}
</style>
