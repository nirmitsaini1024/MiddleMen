const express = require("express");
const adminMiddleware = require("./middleware/admin");
const { Admin } = require("./db/index");
const router = express.Router();

//doesn't not mean, this handles the /signup endpoint.
//it handles /admin/signup, cuz already specified in the index.js file.
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  //check if already exist
  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    msg: "Admin created succesfully",
  });
});
