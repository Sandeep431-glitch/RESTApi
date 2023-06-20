const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const UserModel = require("../models/user");

//getting all
// router.get("/");
//getiing single items
// router.get("/:id", (req, res) => {});
//creating in db
router.post("/", (req, res) => {
  const newUser = UserModel({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  });
  newUser
    .save()
    .than((savedData) => res.status(200).json(newUser))
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    });
});
//updating db
// router.patch("/", (req, res) => {});
//deleting from db
// router.delete("/", (req, res) => {});

module.exports = router;
