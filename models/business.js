const mongoose = require("mongoose");


// DRIVER SCHEMA
const businessSchema = new mongoose.Schema(
    {
        address: { type: String, default: "" },
        businessEmail: { type: String, default: "" },
        logo: { type: String, default: "" },
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    },

    { timestamps: true }
);



module.exports = mongoose.model("Business", businessSchema);
