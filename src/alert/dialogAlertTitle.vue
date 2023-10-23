<template>
    <div class="dialogAlertTitle">
        <div class="dialogAlertTitleIcon">
            <img :src="`./images/alert-icon.png`" />
        </div>
        <div class="dialogAlertTitleContent">
            <n-ellipsis style="max-width: 100%">{{ title }}</n-ellipsis>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>

<style scoped lang="less">
.dialogAlertTitle {
    background: linear-gradient(
        270deg,
        rgba(0, 179, 247, 0) 7%,
        #00b3f7aa 100%
    );
    border-radius: 50px;
    opacity: 0.88;
    width: 100%;
    height: 57px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 2px;
        background: linear-gradient(
            270deg,
            rgba(0, 179, 247, 0) 0%,
            #2c9aff 49%,
            rgba(0, 216, 251, 0) 94%
        );
    }
    &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50%;
        height: 2px;
        background: linear-gradient(
            270deg,
            rgba(0, 179, 247, 0) 0%,
            #2c9aff 49%,
            rgba(0, 216, 251, 0) 94%
        );
    }
    &Icon {
        width: 57px;
        height: 57px;
        background: #052046;
        border-radius: 100%;
        margin-right: 15px;
        @keyframes r {
            to {
                transform: rotate(360deg);
            }
        }
        animation: r linear infinite 15s;
        img {
            width: 100%;
            height: 100%;
        }
    }
    &Content {
        flex: 1;
        height: 57px;
        display: flex;
        align-items: center;
        font-family: ysbt;
        font-size: 30px;
        font-weight: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #dceeff;
        text-shadow: 0px 2px 0px rgba(1, 36, 72, 0.4);
        margin-right: 57px;
        overflow: hidden;
    }
}
</style>
