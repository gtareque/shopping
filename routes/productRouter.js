var express = require('express');
var router = express.Router({mergeParams: true});
var productController = require('../controllers/productController');



/* checks restaurant then displays corresponding menu */

// creates a new user and redirects to menu
router.get('/', (req,res)=>{
    productController.getProducts(req,res); 
});


module.exports = router;