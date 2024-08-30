<template>
    <div ref="el" class='hover'>
        <slot v-if="isOutside && !isHover || useKey || edit"></slot>
        <slot v-else name="hover" :isHover="isHover" :setValue="setValue"></slot>
    </div>
</template>
<script setup lang="ts">
const el = ref()
const p = useParentElement(el)
const isHover= ref<boolean>(false)
const { isOutside } = useMouseInElement(p)
const props = defineProps<{
    useKey?:boolean
    modelValue?:any
    edit?:boolean
}>()
const emits = defineEmits(['update:modelValue'])
const {modelValue} = useVModels(props,emits)
const {focused} =  useFocus(p)
defineSlots<{
    default?():any
    hover?(_:{
        isHover:typeof isHover.value,
        setValue?(bool:boolean):void
    }):any
}>()
const setValue = (val:boolean)=>{
    if(props.useKey){return}
    isHover.value = val
}
useMagicKeys({
    onEventFired(e){
        if(focused.value){
            if(/[0-9]/.test(e.key)){
                modelValue.value = Number(e.key)
            }else if(/Backspace|Delete/.test(e.key)){
                modelValue.value = 0
            }
        }
    }
})
onMounted(()=>{
    p.value.addEventListener('click', ()=>{
        if(!props.edit){
            (p.value as any).focus()
        }
    })
})
</script>
<style scoped lang="less">
.hover{}
</style>