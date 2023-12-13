<template>
    <div class="App">
      <n-config-provider>
        <n-message-provider >
          <n-loading-bar-provider >
            <router-view></router-view>
          </n-loading-bar-provider>
        </n-message-provider>
      </n-config-provider>
    </div>
</template>

<script setup lang="ts">

</script>

