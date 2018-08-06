class VipCart {
  constructor() {}

  async useCart(req, res, next) {
    res.send({
      status: 0,
      type: 'INVALID_CART',
      message: '无效的卡号'
    });
  }
}

module.exports = new VipCart();
