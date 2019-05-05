const mongoose = require("mongoose");

const Articlefeedback = mongoose.model("articleFeedback");

/**
 * 
 */
module.exports.rating = (req, res, next) => {
    // var MongoClient = require("mongodb").MongoClient;
    // var url = "mongodb://localhost:27017/EnvoScholar";
    Articlefeedback.findOneAndUpdate(
         { title: req.body.title },
         {$set: { rating: req.body.rating}}, {upsert: true},
         function(err, savedRating) {
           if (err) {
             res.send("Error saving article rating");
           } else {
             res.json(savedRating);
           }
         }
       );

        }


       /* * Gets called from the index.router.js
        * Returns the rating number */
       module.exports.getRating = (req, res, next) => {
         Articlefeedback.findOne({ title: req.body.title }, (err, articlefeedback) => {
           if (!articlefeedback) {
               Articlefeedback.create({ title: req.body.title, rating : 0})
               //rate.save;
               var initValue = {rating : 0};
               return res.status(200).json({
                   status: true,
                   articlefeedback : initValue
               });
            /* return res
               .status(404)
               .json({ status: false, message: "User rating not found." });*/
           } else {
             return res.status(200).json({
               status: true,
               articlefeedback: articlefeedback
             });
           }
         });
       };

