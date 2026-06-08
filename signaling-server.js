// WebRTC 信令服务器 - 局域网投屏
// 启动: node signaling-server.js
// 默认端口: 9000，可通过环境变量 PORT 修改

const { WebSocketServer } = require('ws')

const PORT = process.env.PORT || 9000
const wss = new WebSocketServer({ port: PORT })

// 所有在线客户端
const clients = new Set()

wss.on('connection', (ws) => {
  clients.add(ws)
  console.log(`[+] 客户端连接，当前在线: ${clients.size}`)

  ws.on('message', (data) => {
    let msg
    try {
      msg = JSON.parse(data.toString())
    } catch {
      return
    }

    // 广播给除自己以外的所有客户端
    for (const client of clients) {
      if (client !== ws && client.readyState === 1) {
        client.send(JSON.stringify(msg))
      }
    }
  })

  ws.on('close', () => {
    clients.delete(ws)
    console.log(`[-] 客户端断开，当前在线: ${clients.size}`)
  })

  ws.on('error', () => {
    clients.delete(ws)
  })
})

// 获取本机局域网 IP，方便打印访问地址
const { networkInterfaces } = require('os')
const nets = networkInterfaces()
const lanIps = []
for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      lanIps.push(net.address)
    }
  }
}

console.log(`\nWebRTC 信令服务器已启动`)
console.log(`本机 IP: ${lanIps.join(', ')}`)
console.log(`局域网其他设备访问: ws://<本机IP>:${PORT}`)
console.log(`本机访问: ws://localhost:${PORT}\n`)
