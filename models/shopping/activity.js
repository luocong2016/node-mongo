const mongoose = require('mongoose');
const { Schema } = mongoose;

const activityData = require('../../initData/activity');

const activitySchema = new Schema({
  id: Number,
  name: String,
  icon_color: String,
  icon_name: String,
  description: String,
  ranking_weight: Number
});

activitySchema.index({ index: 1 });

const Activity = mongoose.model('Activity', activitySchema);

Activity.findOne((err, data) => {
  if (!data) {
    activityData.forEach(item => {
      Activity.create(item);
    });
  }
})

module.exports = Activity;
