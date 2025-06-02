const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phonenumber: String,
    flat: {
        title: String,
        description: String,
        floor: String,
        bedrooms: String,
        size: String,
        price: String,
        image: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "Booked"
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const Booker = mongoose.models.Booker || mongoose.model("Booker", userSchema);
module.exports = Booker;
