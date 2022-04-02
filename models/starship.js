const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starshipSchema = new Schema({
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: Number,
    length: Number,
    max_atmosphering_speed: Number,
    crew: String,
    passengers: Number,
    cargo_capacity: Number,
    consumables: String,
    hyperdrive_rating: String,
    MGLT: String,
    starship_class: String,
    pilots: Array,
    films: Array,
    created: String,
    edited: String,
    url: String,
    count: Number
});

const Starship = mongoose.model('Starship', starshipSchema);

module.exports = Starship;