function handleRequests(urls, maxAtOnce = 5) {
    let running = 0; // 正在进行的请求数
    const queue = [...urls]; // 请求队列
    function next() {
        if (queue.length > 0 && running < maxAtOnce) {
            const url = queue.shift();
            running++;
// 这里是模拟请求
            setTimeout(() => {
                console.log(`Fetched data from ${url}`);
                running--; // 请求结束
                next();
            },2000);
        }
    }

    for (let i = 0; i < maxAtOnce; i++) {
        next();
    }
}
const urls = ['url1', 'url2', 'url3', 'url4', 'url5', 'url6', 'url7']; // 示例URL列表
handleRequests(urls, 2); // 最多同时5个请求






;(function aa(){
    setTimeout(aa)
})()
