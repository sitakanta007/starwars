const express = require("express");
const mongoose = require("mongoose");
const starshipRoutes = require("./routes/starshipRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
require('dotenv').config();

// express apps
const app = express();

// connect to mongo db
const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.MONGO_PROJECT}.udhvp.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(dbUri)
.then(result => {
    app.listen(3000);
    console.log("connected to db and listening on port 3000");
})
.catch(err => console.log(err))

//register view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/starships', starshipRoutes);
app.use('/vehicles', vehicleRoutes);

app.use((req, res) => {
    res.status(404).render("404")
})