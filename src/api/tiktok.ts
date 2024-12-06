export default {
  login() {
    return request({
      url: "/tiktok/login",
      method: "get",
    });
  },
};
