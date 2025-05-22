<template>
    <div class='edit abs-content' ref="editorRef"></div>
</template>
<script setup lang="ts">
import { defineComponent, ref, onMounted, unref } from "vue";
import * as monaco from 'monaco-editor';
import './MonacoEnvironment';
import 'monaco-sql-languages/esm/all.contributions';
import { completionService } from './helpers/completionService';
const editorRef = ref()
import {
    setupLanguageFeatures,
    LanguageIdEnum,
} from 'monaco-sql-languages';

setupLanguageFeatures(LanguageIdEnum.MYSQL, {
    completionItems: {
        enable: true,
        completionService,
    }
});
onMounted(async () => {
    const editorIN = monaco.editor.create(editorRef.value, {
        language: LanguageIdEnum.MYSQL,
        theme: "vs-dark",
        value: 'select * from `vue`',
        suggest: {
            snippetsPreventQuickSuggestions: false
        }
    })
})
</script>
<style scoped lang="less">
.edit {}
</style>