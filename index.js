const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Connection } = require("mongoose");
const app = express();


//database connection
mongoose.connect("mongodb+srv://jason123:HappyDAYS1@cluster0.wy0ayit.mongodb.net/testDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", require("./routes/Route"));

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Server has started on ${port}`);
});


// hitting the route will give you the smallest positive number in the array which is 3

app.get("/get-smallest-positive-number", (req, res) => {
    function smallestPositiveInteger(array) {
        let smallest = Number.MAX_VALUE;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > 0 && array[i] < smallest) {
                smallest = array[i];
            }
        }

        if (smallest === Number.MAX_VALUE) {
            return 0;
        }

        return smallest;
    }
    let array = [-2, 3, 4, 7];
    let smallest = smallestPositiveInteger(array);
    console.log(smallest);

    res.send(smallest);
});