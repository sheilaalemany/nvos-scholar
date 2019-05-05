const express = require("express");
const router = express.Router();

const ctrlUser = require("../controllers/user.controller");

const ctrlfeedBack = require("../controllers/feedBack.controller");

const ctrlartfeedBack = require("../controllers/articleFeedback.controller");

const ctrlfeedackEntries = require("../controllers/feedbackEntries.controller");

//const test = require("../controllers/test.controller");

const jwtHelper = require("../config/jwtHelper");

/**
 * These will be called depending on which function is called from the user.service.ts
 */
router.post("/register", ctrlUser.register);
router.post("/authenticate", ctrlUser.authenticate);
router.get("/userProfile", jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post("/savearticle", jwtHelper.verifyJwtToken, ctrlUser.saveArticle);
router.post("/savesearch", jwtHelper.verifyJwtToken, ctrlUser.saveSearch);
router.post("/saveclick", jwtHelper.verifyJwtToken, ctrlUser.saveClick);
router.post("/question", ctrlfeedBack.question);
/*newly added : article feedback*/
router.post("/rating", ctrlartfeedBack.rating);
router.post("/getRating", ctrlartfeedBack.getRating);
router.post("/savefeedback",jwtHelper.verifyJwtToken, ctrlUser.saveFeedback);
/*newly added : feedback entries*/
router.post("/saveEntries",ctrlfeedackEntries.saveEntries);


module.exports = router;
