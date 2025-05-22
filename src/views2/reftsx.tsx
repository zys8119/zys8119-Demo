import { createApp, ref, h } from './minvue'
export default defineComponent(() => {
    const a = ref(1)
    onMounted(() => {
        setInterval(() => {
            a.value++
        }, 1000)
    })
    const render = (el: HTMLElement) => {
        createApp(el, <div className={() => `asd adsd ${a.value}`}>
            asd-{a}-asdas
        </div>)
    }
    return () => <div ref={render}></div>
})