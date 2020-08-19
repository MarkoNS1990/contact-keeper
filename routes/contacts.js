const express = require("express");

const router = express.Router();

//@route  GET api/contacts
//@desc   get all users contacts
//@access private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

module.exports = router;
