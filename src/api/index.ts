import tiktok from "./tiktok"
export const $apiData = {
    tiktok: tiktok
}
export {
    tiktok
}
export default $apiData

declare global {
    const $apis: typeof $apiData
}