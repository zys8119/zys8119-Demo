import { createApp, ref, h } from './minvue'
export default defineComponent(() => {
    const a = ref(1)
    const render = (el: HTMLElement) => {
        createApp(el, <div>
            <div> {a}</div>
            <button onClick={() => a.value++}>点击</button>
        </div>)
    }
    return () => <div ref={render}></div>
})