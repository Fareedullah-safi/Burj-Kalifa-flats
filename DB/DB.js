const mongoose = require("mongoose");

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB)
        console.log(`MongoDB Connected`, conn);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit with failure
    }
};

module.exports = connect;
