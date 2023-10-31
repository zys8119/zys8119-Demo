const ipScanCalc = (arr:any, i, max = 255)=>{
    if(arr[arr.length - 1 - i] === 255+1){
        arr[arr.length - 1 - i] = 0
        arr[arr.length - 2 - i] += 1
        arr.isCalc  = true
        ipScanCalc(arr, i + 1, max)
    }
}
export const ipScan = async (ip1:string, ip2:string, callBack?:(ip:string)=> Promise<void> | void, max = 255)=>{
    const ip1Arr = ip1.split('.')
    const ip2Arr = ip2.split('.')
    const ip1max = Number(ip1Arr.map(e=>e.padStart(3,'0')).join(''))
    const ip2max = Number(ip2Arr.map(e=>e.padStart(3,'0')).join(''))
    if(ip1max <=  ip2max){
        await callBack?.(ip1)
        const newIp = ip1Arr.map(e=>+e).reduce((a, b, i, arr:any)=>{
            if(!arr.isCalc){
                if(arr[arr.length - 1 - i] < max+2){
                    arr[arr.length - 1 - i] += 1
                    arr.isCalc  = true
                }
                ipScanCalc(arr, i, max)
            }
            return arr
        },[]).join('.')
        await Promise.resolve()
        await ipScan(newIp, ip2, callBack, max)
    }
}
export default ipScan
