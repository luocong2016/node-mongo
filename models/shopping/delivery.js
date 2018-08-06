const mongoose = require('mongoose');
const { Schema } = mongoose;

const deliveryData = require('../../initData/delivery');

const DeliverySchema = new Schema({
  id: Number,
  color: String,
  is_solid: Boolean,
  text: String
});

DeliverySchema.index({ id: 1 });

const Delivery = mongoose.model('Delivery', DeliverySchema);

Delivery.findOne((err, data) => {
  if (!data) {
    Delivery.create(deliveryData);
  }
})

module.exports = Delivery;
