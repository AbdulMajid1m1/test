const mongoose = require("mongoose");


// DRIVER SCHEMA
const secondUserSchema = new mongoose.Schema(
    {
        name: { type: String, default: "" },
        email: { type: String, default: "" },
        password: { type: String, default: "" },
        followers: [{
            status: { type: String, default: "" },
            user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        }],
    },

    { timestamps: true }
);
module.exports = mongoose.model("SecondUser", secondUserSchema);
