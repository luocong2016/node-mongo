const mongoose = require('mongoose');
const { Schema } = mongoose;

const explainData = require('../../initData/explain');

const explainSchema = new Schema({
  data: Schema.Types.Mixed
});

const Explain = mongoose.model('Explain', explainSchema);

Explain.findOne((err, data) => {
  if (!data) {
    Explain.create({ data: explainData });
  }
});

module.exports = Explain;
