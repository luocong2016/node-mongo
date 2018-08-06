const AdminModel = require('../../models/admin/admin');
const OrderModel = require('../../models/bos/order');
const StatisModel = require('../../models/statis/statis');
const UserInfoModel = require('../../models/v2/userInfo');

class Statis {
  constructor() { }

  async apiCount(req, res, next) {
    const { date } = req.params;

    if (!date) {
      console.log('参数错误');

      res.send({
        status: 0,
        type: 'ERROR_PARAMS',
        message: '参数错误'
      });

      return;
    }

    try {
      const count = await StatisModel
        .find({ date })
        .count();

      res.send({
        status: 1,
        count
      });
    } catch (err) {
      console.log('获取当天API请求次数失败');

      res.send({
        status: 0,
        type: 'ERROR_GET_TODAY_API_COUNT',
        message: '获取当天API请求次数失败'
      });
    }
  }

  async apiAllCount(req, res, next) {
    try {
      const count = await StatisModel.count();

      res.send({
        status: 1,
        count
      });
    } catch (err) {
      console.log('获取所有API请求次数失败');

      res.send({
        status: 0,
        type: 'ERROR_GET_ALL_API_COUNT',
        message: '获取所有API请求次数失败'
      });
    }
  }

  async allApiRecord(req, res, next) {
    try {
      const allRecord = await StatisModel.find({}, '-_id -__v');

      res.send(allRecord);
    } catch (err) {
      console.log('获取所有API请求信息失败');

      res.send({
        status: 0,
        type: 'GET_ALL_API_RECORD_DATA_FAILED',
        message: '获取所有API请求信息失败'
      });
    }
  }
  async userCount(req, res, next) {
    const { date } = req.params;

    if (!date) {
      console.log('参数错误');

      res.send({
        status: 0,
        type: 'ERROR_PARAMS',
        message: '参数错误'
      });

      return;
    }

    try {
      const count = await UserInfoModel
        .find({ registe_time: eval('/^' + date + '/gi') })
        .count();

      res.send({
        status: 1,
        count
      });
    } catch (err) {
      console.log('获取当天注册人数失败');

      res.send({
        status: 0,
        type: 'ERROR_GET_USER_REGISTE_COUNT',
        message: '获取当天注册人数失败'
      });
    }
  }

  async adminCount(req, res, next) {
    const { date } = req.params;

    if (!date) {
      console.log('参数错误');

      res.send({
        status: 0,
        type: 'ERROR_PARAMS',
        message: '参数错误'
      });

      return;
    }

    try {
      const count = await AdminModel
        .find({ create_time: eval('/^' + date + '/gi') })
        .count();

      res.send({
        status: 1,
        count
      });

    } catch (err) {
      console.log('获取当天注册管理员人数失败');

      res.send({
        status: 0,
        type: 'ERROR_GET_ADMIN_REGISTE_COUNT',
        message: '获取当天注册管理员人数失败'
      });
    }
  }

  async orderCount(req, res, next) {
    const { date } = req.params;

    if (!date) {
      console.log('参数错误');

      res.send({
        status: 0,
        type: 'ERROR_PARAMS',
        message: '参数错误'
      });

      return;
    }

    try {
      const count = await OrderModel
        .find({ formatted_created_at: eval('/^' + date + '/gi') })
        .count();

      res.send({
        status: 1,
        count
      });
    } catch (err) {
      console.log('获取当天订单数量失败');

      res.send({
        status: 0,
        type: 'ERROR_GET_ORDER_COUNT',
        message: '获取当天订单数量失败'
      });
    }
  }
}

module.exports = new Statis();
