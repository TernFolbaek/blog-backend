const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  user: { type: String, required: true },
  timeStamp: { type: Date, default: new Date() },
  comments: { type: Array, },

});

// Export model
module.exports = mongoose.model('Post', postSchema);
