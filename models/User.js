const mongoose = require("mongoose");


// DRIVER SCHEMA
const userSchema = new mongoose.Schema(
    {
        name: { type: String, default: "" },
        email: { type: String, default: "" },
        password: { type: String, default: "" },
    },

    { timestamps: true }
);



module.exports = mongoose.model("User", userSchema);
