const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentsData = require('../../initData/payments');

const paymentsSchema = new Schema({
  id: Number,
  description: String,
  disabled_reason: String,
  is_online_payment: Boolean,
  name: String,
  promotion: [],
  select_state: Number
});

const Payments = mongoose.model('Payments', paymentsSchema);

Payments.findOne((err, data) => {
  if (!data) {
    paymentsData.forEach(item => {
      Payments.create(item);
    });
  }
});

module.exports = Payments;
