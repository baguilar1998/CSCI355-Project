const express = require("express");
const InvestorController = require("../controller/investor");
const midAuth = require("../tokenAuth/authInvestor");

const router = express.Router();


router.post("/signup", InvestorController.createInvestor);

router.post("/login", InvestorController.loginInvestor);

//Use this route to update investor information.
//Frontend needs to pass in: name, phoneNumber, description. weblink, currentCompany, interest.
//ONLY CALL THIS ROUTE IF USER IS LOGGED IN!
router.patch("/updateDesc", midAuth, InvestorController.updateInvestor);

module.exports = router;
