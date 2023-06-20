const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//getting all
// router.get("/");
//getiing single items
router.get("/:id", (req, res) => {});
//creating in db
router.post("/", usersController.create);
//updating db
router.patch("/", (req, res) => {});
//deleting from db
router.delete("/", (req, res) => {});

module.exports = router;
