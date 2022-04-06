const express = require('express');
const logger = require("../logger/logger")
const router = express.Router();
const helper = require("../util/helper")
const formatter = require("../validator/formatter")
const _ = require("lodash")

const myString = "Function Up"
const myarr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "octomber", "november", "December"]
const myOddNo = [1,3,5,7,9,11,13,15,17,19]
const myRandomNo = [1,5,3,9,4,7,1,5,3,9,4,6]
const pairs =[['horror','The Shining'], ['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    logger.welcome()
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    console.log(formatter.uppercase);
    console.log(formatter.lowercase);
    console.log(formatter.trim);
    
});
router.get("/hello", (req, res)=>{
    console.log(_.chunk(myarr, 4));
    console.log(_.tail(myOddNo));
    console.log(_.union(myRandomNo));
console.log(_.fromPairs(pairs));

})

module.exports = router;
// adding this comment for no reason