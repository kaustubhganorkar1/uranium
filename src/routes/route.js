const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")
const batchesController = require('../controllers/batchesController')
const developerController = require('../controllers/developerCotroller')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getAllbooks", bookController.getAllbooks)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createPublisher",publisherController.createPublisher )

router.put("/book/:id", bookController.updateBook)

router.post('/batches', batchesController.createBatches)

router.post('/developers', developerController.createDeveloper)

router.get('/scholarship-developers',developerController.eligableDevelopers)

router.get('/developers', developerController.queryDeveloper)

module.exports = router;