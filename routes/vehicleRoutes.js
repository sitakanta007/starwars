const express = require("express");
const vehicleController = require("../controllers/vehicleController");

const router = express.Router();

router.get('/', vehicleController.vehicleIndex);
router.get('/:id', vehicleController.vehicleDetails);
router.post('/:id', vehicleController.vehicleUpdate);

module.exports = router;