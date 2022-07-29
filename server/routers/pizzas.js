const { Router } = require("express");
const Pizza = require("../models/Pizza");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newPizza = new Pizza(request.body);

  newPizza.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// NOT COVERED IN CLASS YET
// Get (read) all records from the collection
router.get("/", (request, response) => {
  Pizza.find({}, (error, record) => {
    if (error) return response.send(500).json(error);
    return response.json(record);
  });
});

// NOT COVERED IN CLASS YET
// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Pizza.findById(request.params.id, (error, record) => {
    if (error) return response.send(500).json(error);
    return response.json(record);
  });
});

// NOT COVERED IN CLASS YET
router.delete("/:id", (request, response) => {
  Pizza.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.send(500).json(error);
    return response.json(record);
  });
});
module.exports = router;
// 62e30da803d2bc8ffe6211c5
