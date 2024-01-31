<template>
  <div class="ai-voice bg-#f7d6b8 abs-content of-hidden" @click="toggle">
    <img class="abs-content bg" :src="`./ai/bg.png`" alt="">
    <img class="abs-start-bottom w-100% footer" :src="`./ai/footer.png`" alt="">
    <img class="abs-start-bottom house" :src="`./ai/house-left.png`" alt="">
    <img class="abs-end-bottom house" :src="`./ai/house-right.png`" alt="">
    <img class="abs-start w-183px left-13% top-5% yun-up" :src="`./ai/yun-up.png`" alt="">
    <img class="abs-end-bottom right-13% bottom-30px yun-down" :src="`./ai/yun-down.png`" alt="">
    <img class="abs-start w-300px top-10% left--70px jack-left" :src="`./ai/jack-left.png`" alt="">
    <img class="abs-end w-300px top-10% right--70px jack-right" :src="`./ai/jack-right.png`" alt="">
  </div>
</template>

<script setup lang="ts" title="ai数字人">
const {toggle} = useFullscreen()
</script>

<style scoped lang="less">
.yun-up{
  @keyframes yun-up {
    0%{
      left:3%;
      opacity: 0.2;
    }
    50%{
      left:13%;
      opacity: 1;
    }
    100%{
      left:3%;
      opacity: 0.2;
    }
  }
  animation: yun-up 6s ease-in-out infinite;
}
.yun-down{
  @keyframes yun-down {
    0%{
      right:3%;
      opacity: 0.2;
    }
    50%{
      right:13%;
      opacity: 1;
    }
    100%{
      right:3%;
      opacity: 0.2;
    }
  }
  animation: yun-down 6s ease-in-out infinite;
}
.house{
  @keyframes house {
    0%{
      transform: translateY(0);
    }
    50%{
      transform: translateY(10px);
    }
    100%{
      transform: translateY(0px);
    }
  }
  animation: house 4s ease-in-out infinite;
}
.jack-left{
  @keyframes jack-left {
    0%{
      transform: translateY(0) rotate(0deg);
    }
    50%{
      transform: translateY(10px) rotate(2deg);
    }
    100%{
      transform: translateY(0px) rotate(0deg);
    }
  }
  transform-origin: 0 0;
  animation: jack-left 4s ease-in-out infinite;
}
.jack-right{
  @keyframes jack-right {
    0%{
      transform: translateY(0) rotate(0deg);
    }
    50%{
      transform: translateY(10px) rotate(2deg);
    }
    100%{
      transform: translateY(0px) rotate(0deg);
    }
  }
  transform-origin: 100% 0;
  animation: jack-right 4s ease-in-out infinite;
}
.footer{
  @keyframes footer {
    0%{
      transform: translateY(0) translateX(0) scale(1);
    }
    50%{
      transform: translateY(10px) translateX(10px) scale(1.05);
    }
    100%{
      transform: translateY(0) translateX(0px) scale(1);
    }
  }
  animation: footer 8s ease-in-out infinite;
}
.bg{
  @keyframes bg {
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(1.01);
    }
    100%{
      transform: scale(1);
    }
  }
  animation: bg 6s ease-in-out infinite;
}
</style>
