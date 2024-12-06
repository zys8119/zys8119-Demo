import request from "request";
export default {
  qrcode() {
    return request({
      url: "/tiktok/qrcode",
      method: "get",
    });
  },
};
