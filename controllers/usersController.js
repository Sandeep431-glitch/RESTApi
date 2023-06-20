const User = require("../models/user");

exports.create = async (req, res) => {
  // Validate request
  try {
    // Create a user
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });

    // Save user in the database
    const usersingle = await user.save();
    res.send(usersingle);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the user.",
    });
  }
};
