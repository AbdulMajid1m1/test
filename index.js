const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Connection } = require("mongoose");
const app = express();
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "creativem",
    api_key: "728829647533853",
    api_secret: "d7FOpvaEzC9D0XmKY_pGqzGTUm4",
});
const cors = require("cors");
app.use(
    fileUpload({
        useTempFiles: true, // this is the default

    })
);
//database connection
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://jason123:HappyDAYS1@cluster0.wy0ayit.mongodb.net/dashboard?retryWrites=true&w=majority", {
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to database");
}).catch((e) => {
    console.log(e);
});


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", require("./routes/Route"));










const port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log(`Server has started on ${port}`);
});



