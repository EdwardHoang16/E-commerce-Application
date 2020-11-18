const express = require("express");

const router = express.Router();

// Receive a post request to add an item to the cart
router.post("/cart/products", (req, res) => {
    console.log(req.body.productId);
    res.send("Product added to cart");
})

// Receive a get request to see all items in cart

//Receive a post to delete an item in the cart

module.exports = router;