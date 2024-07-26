<template>
  <div class="hel-micro">

    <n-button type="primary" @click="dialogTest">dialog</n-button>
  </div>
</template>

<script setup lang="ts" title="hel-micro" content="Hel提供了一种运行时引入远程模块的能力，模块部署在 CDN，远程模块发布后，不需要重新构建发布，就能生效。hel所引入的远程模块，可以作为微模块，为传统的页面级别微前端提供了补充。页面级微前端虽然功能强大，但在粒度上有时显得过于粗犷，无法满足所有应用场景的精细需求。在需要更细粒度微前端的情况下，如组件或函数级别的拆分和组合，hel的远程模块功能便能发挥其独特优势。通过利用hel工具，开发者能够更加精确、高效地构建和扩展前端应用，从而提升整体的开发效率和项目质量。https://github.com/Tencent/hel">

import { useDialog } from 'naive-ui';
const dialog = useDialog();
const dialogTest = () => {
  const a = dialog.warning({
    title: 'asdasasdasda',
    content: () =>
        h(
            defineAsyncComponent({
              loader: () => import('./alert/text2.vue'),
            })
        ),
  });
  setTimeout(() => {
    a.destroy()
  }, 2000);
};

</script>

<style scoped lang="less">
.hel-micro {

}
</style>
