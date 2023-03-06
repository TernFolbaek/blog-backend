const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: { type: String, required: true },
  timeStamp: { type: Date },
});

// Export model
module.exports = mongoose.model('Comment', CommentSchema);
