const mongoose = require("mongoose");

const FeedbackEntries = mongoose.model("feedbackEntries");


/* * Gets called from the index.router.js
        * Records data in DB */
module.exports.saveEntries = (req, res, next) => {
    
    FeedbackEntries.create({ title: req.body.title, rating : req.body.rating , user :req.body.user, search_query: req.body.search_query })

        }


       /* * Gets called from the index.router.js
        * Returns the rating number */
      