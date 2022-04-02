const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: Number,
    length: String,
    max_atmosphering_speed: Number,
    crew: Number,
    passengers: Number,
    cargo_capacity: Number,
    consumables: Number,
    vehicle_class: String,
    pilots: Array,
    films: Array,
    created: String,
    edited: String,
    url: String,
    count: Number
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;