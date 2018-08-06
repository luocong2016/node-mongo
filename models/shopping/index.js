const ActivityModel = require('./activity');
const CategoryModel = require('./category');
const DeliveryModel = require('./delivery');
const { Food, Menu } = require('./food');

const ShopModel = require('./shop');

module.exports = {
  ActivityModel,
  CategoryModel,
  DeliveryModel,
  FoodModel: Food,
  MenuModel: Menu,
  ShopModel
}