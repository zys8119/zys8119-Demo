/**
 * 实现以下代码，让其正常运行，并简要说明这是什么模式及这种模式的优点
 */
// 使用示例
const order = new Order(new AlipayService());
order.processPayment(100); // `支付宝支付 100 元`

const anotherOrder = new Order(new WechatPayService());
anotherOrder.processPayment(50); // `微信支付 100 元`
