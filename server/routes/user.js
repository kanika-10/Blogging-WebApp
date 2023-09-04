const express = require("express");
const {
  handleUserLogin,
  handleUserSignup,

} = require("../controllers/user");

const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", handleUserLogin);
router.post("/signup", handleUserSignup);


module.exports = router;
