const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: String, required: true },
}, { timestamps: true });

const user = mongoose.model("user",  userSchema);
module.exports = user