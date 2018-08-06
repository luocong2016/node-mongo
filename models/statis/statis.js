const mongoose = require('mongoose');
const { Schema } = mongoose;

const statisSchema = new Schema({
  id: Number,
  date: String,
  origin: String,
});

statisSchema.index({ id: 1 });

const Statis = mongoose.model('Statis', statisSchema);

module.exports = Statis;
