const Vehicle = require("../models/vehicle");

const vehicleIndex = (req, res) => {
    Vehicle.find().then(result => {
        res.render('vehicles', { vehicles: result });
    }).catch(err => console.log(err));
}

const vehicleDetails = (req, res) => {
    const id = req.params.id;
    Vehicle.findById(id).then(result => {
        if(!result.count) { result.count = 0 }
        res.render('vehicle-details', { vehicle: result });
    }).catch(err => console.log(err));
}

const vehicleUpdate = (req, res) => {
    const id = req.params.id;
    const count = req.body.count;
    Vehicle.findByIdAndUpdate(id, { count }).then(result => {
        res.redirect(`/vehicles/${id}`);
    }).catch(err => console.log(err));
}

module.exports = {
    vehicleIndex, vehicleDetails, vehicleUpdate
}