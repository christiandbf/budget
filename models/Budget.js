const mongoose = require('mongoose');

const { Schema } = mongoose;

const Budget = new Schema({
  user: {
    type: String,
    required: true,
    index: true,
  },
  category: {
    type: String,
    required: true,
    uppercase: true,
  },
  amount: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.models.Budget || mongoose.model('Budget', Budget);
