const mongoose = require("mongoose");

var feedBackSchema = new mongoose.Schema({
  question1: {
    type: String,
    index: true
  },
  question2: String

});

mongoose.model("Feedback", feedBackSchema, "feedbacks");
