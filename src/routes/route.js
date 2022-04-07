const express = require("express");
const logger = require("./logger");

const router = express.Router();

const moviesList = [
  "rang de basnasti",
  "the shining",
  "lord of the rings",
  "batman begins",
  "Moon Knight",

];
const moviesObjList =[ {
    "id": 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
   

router.get("/user-profile/:abcd", function (req, res) {
  console.log(req);
  console.log(req.params.abcd);
  res.send("dummy response");
});

router.get("/test-me", function (req, res) {
  console.log("------------------");
  console.log(req);
  console.log("------------------");
  console.log("These are the request query parameters: ", req.query);
  res.send("My first ever api!");
});

router.get("/movies", (req, res) => {
  console.log("Succesfull");
  res.send(moviesList);
});

router.get("/movies/:indexNumber", (req, res) => {
  if (req.params.indexNumber < moviesList.length) {
    res.send(moviesList[req.params.indexNumber]);
    console.log(req.params.indexNumber);
  } else {
    res.send(" Enter the index no . between 0 to " + moviesList.length);
  }
});

router.get("/films", (req, res)=>{
    res.send(moviesObjList)
})
router.get("/films/:id", (req, res)=>{
    let reqsID =parseInt(req.params.id) 
    const result = moviesObjList.find(data => data.id == reqsID)
    if(result){
        res.send(result)
    }
    else{
        res.send("no movie exists with given index")
    }
    
    console.log(moviesObjList.find(data => data.id = reqsID));
})

module.exports = router;
// adding this comment for no reason
