const express = require("express");
const router = express.Router();

// const homeController = require("../controllers/home_controller");
console.log(`router is running`);

router.get("/", (req, res) => {
  res.send("hello home");
});
router.use("/users", require("./users"));

module.exports = router;
