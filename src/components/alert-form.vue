<template>
  <div class="alert-form">
    <slot name="top"></slot>
    <alert-content v-if="showForm">
      <slot name="form-top"></slot>
      <n-form
        :model="formData"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        label-width="auto"
        v-bind="formProps"
      >
        <slot :data="formData"></slot>
      </n-form>
      <slot name="form-bottom"></slot>
      <template #footer v-if="showFooter">
        <slot name="footer-top" :save="save"></slot>
        <n-space
          justify="center"
          v-if="showSaveBtn || showCancelBtn || $slots.footer"
        >
          <n-button @click="cancel" v-if="showCancelBtn">{{
            cancelBtnText
          }}</n-button>
          <n-button type="primary" @click="save" v-if="showSaveBtn">{{
            saveBtnText
          }}</n-button>
          <slot name="footer" :save="save"></slot>
        </n-space>
        <slot name="footer-bottom" :save="save"></slot>
      </template>
    </alert-content>
    <slot name="bottom"></slot>
  </div>
</template>
<script setup lang="ts">
import { FormRules, FormProps } from "naive-ui";
const props = withDefaults(
  defineProps<{
    row?: any;
    showFooter?: boolean;
    showSaveBtn?: boolean;
    showCancelBtn?: boolean;
    saveBtnText?: string;
    cancelBtnText?: string;
    showForm?: boolean;
    api?: (data: Record<string, any>) => Promise<any>;
    editApi?: (data: Record<string, any>) => Promise<any>;
    rules?: FormRules;
    modelValue?: Record<string, any>;
    formProps?: FormProps;
    preprocessor?: (data: Record<string, any>) => any | Promise<any>;
    preprocessorMounted?: (data: Record<string, any>) => any | Promise<any>;
    extraData?: Record<string, any>;
    isCloseDialog?: boolean;
  }>(),
  {
    row: null,
    showFooter: true,
    showSaveBtn: true,
    showCancelBtn: true,
    saveBtnText: "保存",
    cancelBtnText: "取消",
    showForm: true,
    api: null,
    rules: null,
    modelValue: () => ({}),
    formProps: () => ({}),
    preprocessor: (data: Record<string, any>) => data,
    preprocessorMounted: (data: Record<string, any>) => data,
    extraData: () => ({}),
    isCloseDialog: true,
  },
);
const emit = defineEmits([
  "update:row",
  "save",
  "update:modelValue",
  "update:rules",
]);
const { row, rules, modelValue: formData, extraData } = useVModels(props, emit);
const formRef = ref<any>();
const save = async () => {
  await formRef.value?.validate();
  const saveData = await props.preprocessor?.({
    ...formData.value,
    ...extraData.value,
  });
  let res = null;
  if (row.value?.id) {
    res = await props.editApi?.(saveData);
  } else {
    res = await props.api?.(saveData);
  }
  emit("save", row.value, saveData, res);
  await nextTick();
  if (props.isCloseDialog) {
    $alert.dialog.close();
  }
};
const cancel = () => {
  $alert.dialog.close();
};
onMounted(async () => {
  if (row.value?.id) {
    formData.value = await props.preprocessorMounted({
      ...row.value,
    });
  }
});
</script>
<style scoped lang="less">
.alert-form {
}
</style>
