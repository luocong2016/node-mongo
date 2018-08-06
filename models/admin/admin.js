const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
  id: Number,
  user_name: String,
  password: String,
  status: Number, // 1普通管理 2超级管理员
  city: String,
  create_time: { type: Date, default: Date.now },
  avatar: { type: String, default: 'default.jpg' }
});

adminSchema.index({ id: 1 });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
