const mongoose = require("mongoose");

var feedbackEntriesSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true
  },
  search_query : String,
  rating : Number,
  user: String
});

module.exports = mongoose.model("feedbackEntries", feedbackEntriesSchema);

