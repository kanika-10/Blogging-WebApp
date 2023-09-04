const express = require("express");

const { handleGetAllBlogs } = require("../controllers/home");

const router = express.Router();

router.get("/", handleGetAllBlogs);

module.exports = router;
