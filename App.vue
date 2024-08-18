<template>
    <div class="App">
      <n-config-provider>
        <n-message-provider >
          <n-loading-bar-provider >
            <n-dialog-provider >
              <router-view></router-view>
            </n-dialog-provider>
          </n-loading-bar-provider>
        </n-message-provider>
      </n-config-provider>
    </div>
</template>

<script setup lang="ts">

</script>

