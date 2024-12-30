const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    email: { type: String, required: true },
    productID: { type: String, required: true },
    amount: { type: Number, required: true },
    // rol: { type: String, required: true },
}, { timestamps: true });

const cart = mongoose.model("cart",  cartSchema);
module.exports = cart