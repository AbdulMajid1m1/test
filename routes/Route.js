const router = require("express").Router();
const Product = require("../models/product");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "creativem",
    api_key: "728829647533853",
    api_secret: "d7FOpvaEzC9D0XmKY_pGqzGTUm4",
});

router.get("/get-all-products", async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        res
            .status(400)
            .send(err);
    }
});

router.get("/get-product/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.send(product);
    } catch (err) {
        res
            .status(400)
            .send(err);
    }
});

router.delete("/delete-product/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.send(product);
    } catch (err) {
        res
            .status(400)
            .send(err);
    }
});



router.post("/add-product", async (req, res) => {
    const { ProductName, totalStock, purchasePrice, sellingPrice, id } = req.body; // destructure the request body
    let productImg = "";
    if (req.files) {
        if (Object.prototype.hasOwnProperty.call(req.files, 'productImg')) {
            productImg = req.files.productImg;
            await cloudinary.uploader.upload(productImg.tempFilePath, function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    productImg = result.url;
                }
            }
            );
        }
    } else {
        productImg = "";
    }


    const product = new Product({
        productImg,
        ProductName,
        totalStock,
        purchasePrice,
        sellingPrice,
        id,
    });

    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (err) {
        res
            .status(400)
            .send(err);
    }
});


module.exports = router;