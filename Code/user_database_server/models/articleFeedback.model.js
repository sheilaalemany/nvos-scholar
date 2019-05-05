const mongoose = require("mongoose");

var articleFeedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true
  },
  rating : Number
});

module.exports = mongoose.model("articleFeedback", articleFeedbackSchema);

