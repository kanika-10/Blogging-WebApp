const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  handleAddNewBlog,
  handleAddNewComment,
  handleGetBlogById,
  handleGetAllBlogsByCategory,
  handleGetAllBlogsAfterSort,
  handleFavouriteBlogList,
  handleGetFavouriteBlogList,
} = require("../controllers/blog");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});multer

const upload = multer({ storage: storage });

router.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

router.get("/:id", handleGetBlogById);
router.post("/comment/:blogId", handleAddNewComment);
router.post("/", upload.single("image"), handleAddNewBlog);
router.get("/", handleGetAllBlogsByCategory);
router.post("/show", handleGetAllBlogsAfterSort);
router.post("/favourites/:blogId", handleFavouriteBlogList);
router.post("/favourites", handleGetFavouriteBlogList);
module.exports = router;
