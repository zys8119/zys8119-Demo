import {merge} from "lodash"
const defaultConfig:{
    [key:string]:any
    color?:string
    background?:string
    length:number
    lineLength:number
    fontSzie:number
} = {
    length:4,
    lineLength:3,
    fontSzie:30,
}
function generateRandomCode(length:number = 4) {
    let code = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}
function generateCaptcha(options?:Partial<typeof defaultConfig>) {
    const config = merge(defaultConfig, options)
    const canvas = document.createElement('canvas');
    canvas.width = config.length * config.fontSzie
    canvas.height = config.fontSzie
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = config.background || "#c4c4c4";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const captchaCode = generateRandomCode(config.length)
    captchaCode.split("").forEach((e: string, k) => {
        ctx.save();
        ctx.fillStyle = `#${config.color || Math.random().toString(16).substring(2, 8)}`;
        const size = 94 / captchaCode.length;
        ctx.font = `${size}px Arial`;
        ctx.rotate((Math.floor(Math.random() * 10) * Math.PI) / 180);
        ctx.fillText(e, size * k, size);
        ctx.restore();
    });
    new Array(config.lineLength).fill(0).forEach(()=>{
        ctx.save()
        ctx.translate(canvas.width*0.5, canvas.height*0.5)
        ctx.rotate(Math.floor(Math.random() * 45));
        ctx.beginPath()
        ctx.strokeStyle = `#${Math.random().toString(16).substring(2, 8)}`
        ctx.lineWidth = 1
        ctx.moveTo(-canvas.width*0.5,-canvas.height*0.5)
        ctx.lineTo(canvas.width, canvas.height)
        ctx.stroke()
        ctx.closePath()
        ctx.restore();
    })
    return {
        code:captchaCode,
        img:canvas.toDataURL()
    }
}
export default generateCaptcha
