const mongoose = require('mongoose');
var products = require('../models/products.js');
const bodyParser=require("body-parser");

const getProducts = (req, res) => {

    products.find(function(err, doc) {
        res.render('catalog', {doc: doc});
    });

};

module.exports = {getProducts};