const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  user_id: Number,
  username: String,
  password: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;
