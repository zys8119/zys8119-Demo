// WebRTC 信令服务器 - 局域网投屏
// 启动: npx tsx signaling-server.ts
// 默认端口: 9000，可通过环境变量 PORT 修改

import WebSocket, { WebSocketServer } from "ws";
import { networkInterfaces } from "os";
import { createServer } from "https";
import { getCertificate } from "@vitejs/plugin-basic-ssl";
(async () => {
  const certificate = await getCertificate(
    "./certs",
    "signaling-server",
    [
      // "192.168.10.104"
    ],
    365,
  );
  const server = createServer({
    cert: certificate,
    key: certificate,
  });
  const PORT = Number(process.env.PORT) || 9000;
  const wss = new WebSocketServer({ server });

  const clients = new Set<WebSocket>();

  wss.on("connection", (ws: WebSocket) => {
    clients.add(ws);
    console.log(`[+] 客户端连接，当前在线: ${clients.size}`);

    ws.on("message", (data) => {
      let msg;
      try {
        msg = JSON.parse(data.toString());
      } catch {
        return;
      }

      // 广播给除自己以外的所有客户端
      for (const client of clients) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(msg));
        }
      }
    });

    ws.on("close", () => {
      clients.delete(ws);
      console.log(`[-] 客户端断开，当前在线: ${clients.size}`);
    });

    ws.on("error", () => {
      clients.delete(ws);
    });
  });

  // 获取本机局域网 IP，方便打印访问地址
  const nets = networkInterfaces();
  const lanIps: string[] = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] ?? []) {
      if (net.family === "IPv4" && !net.internal) {
        lanIps.push(net.address);
      }
    }
  }
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`[+] 服务器监听端口: ${PORT}`);
  });
  console.log(`\nWebRTC 信令服务器已启动`);
  console.log(`本机 IP: ${lanIps.join(", ")}`);
  console.log(`局域网其他设备访问: wss://<本机IP>:${PORT}`);
  console.log(`本机访问: wss://localhost:${PORT}\n`);
})();
