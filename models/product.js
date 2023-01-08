const mongoose = require("mongoose");


// DRIVER SCHEMA
const productSchema = new mongoose.Schema(
    {
      
        productImg: { type: String, default: "" },
        ProductName: { type: String, default: "" },
        totalStock: { type: Number, default: 0 },
        purchasePrice: { type: Number, default: 0 },
        sellingPrice: { type: Number, default: 0 },
        id: { type: Number, default: 0 },
    },

    { timestamps: true }
);



module.exports = mongoose.model("Product", productSchema);
