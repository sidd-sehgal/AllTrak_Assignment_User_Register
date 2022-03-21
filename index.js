require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require('path');

const db = require('./config/database');

db.authenticate()
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(err => {
        console.log("Error: " + err);
    })

app.use(cors());
app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.use(require("./routes/Users"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});