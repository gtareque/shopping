const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require('./models');
var products = require('./models/products.js');
const productRouter = require('./routes/productRouter');


app.use('/', productRouter);



app.listen(process.env.PORT || 3000, () => {
    console.log("The  app is running on port 3000!");
});