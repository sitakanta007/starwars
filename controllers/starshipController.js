const Starship = require("../models/starship");

const starshipIndex = (req, res) => {
    Starship.find().then(result => {
        res.render('starships', { starships: result });
    }).catch(err => console.log(err));
}

const starshipDetails = (req, res) => {
    const id = req.params.id;
    Starship.findById(id).then(result => {
        if(!result.count) { result.count = 0 }
        res.render('starship-details', { starship: result });
    }).catch(err => console.log(err));
}

const starshipUpdate = (req, res) => {
    const id = req.params.id;
    const count = req.body.count;
    Starship.findByIdAndUpdate(id, { count }).then(result => {
        res.redirect(`/starships/${id}`);
    }).catch(err => console.log(err));
}

module.exports = {
    starshipIndex, starshipDetails, starshipUpdate
}