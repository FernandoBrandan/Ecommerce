const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    /** */
    // brand: { type: String, required: true },
    // category: { type: String, required: true },
    // stock: { type: Number, required: true },
    // prince: { type: Number, required: true },
    // discount: { type: Number, required: true },
    // rating: { type: Number, required: true },
}, { timestamps: true });

const product = mongoose.model("product", productSchema );
module.exports = product