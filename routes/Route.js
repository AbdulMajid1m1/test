const router = require("express").Router();
const Business = require("../models/business");
const User = require("../models/user");


router.post("/business-login", async (req, res) => {
    const { address, businessEmail, logo, user_id } = req.body;

    const business = new Business({
        address,
        businessEmail,
        logo,
        user_id,
    });

    try {
        const savedBusiness = await business.save();
        res.send(savedBusiness);
    } catch (err) {
        res.status(400).send(err);
    }
});

// user route to get all users  who have business email as 'abc@gmail.com'
router.get("/get-users", async (req, res) => {

    Business.find({ email: 'abc@gmail.com' }, function (err, docs) {
        if (err) {
            console.log(err);
        }

        else {
            const userIds = docs.map(doc => doc.user_id);

            User.find({ _id: { $in: userIds } }, function (err, users) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).json(users);
                }
            }).limit(3);

        }
    });
});


// Route for Q1 users to get registered
router.post("/user-login", (req, res) => {

    const user = new User({ name: req.body.name, email: "abc@gmail.com", password: "123" });
    user.save(function (err) {
        if (err) return console.log(err);

        else {
            res.status(200).json(user);
        }
    });



});


// Q2 Route to get all users who have followers with the given ID and  status pending
router.get("/all-users", async (req, res) => {
    User.find(
        { $and: [{ "followers": { $in: ["_id", "62ff927bf268cc41bc596a02"] } }, { status: "pending" }] },
        function (err, docs) {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200).json(docs);
            }
        }
    );

});




module.exports = router;


// Q4 Route to insert a user into followers array of another user

router.get("/insert-into-followers", async (req, res) => {
    User.updateOne({ _id: "62ff927bf268cc41bc596a02" }, { $push: { followers: "60ff927bf268cc41bc596a02" } }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).json(docs);
        }
    });

});