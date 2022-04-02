const express = require("express");
const starshipController = require("../controllers/starshipController");

const router = express.Router();

router.get('/', starshipController.starshipIndex);
router.get('/:id', starshipController.starshipDetails);
router.post('/:id', starshipController.starshipUpdate);

module.exports = router;