const Favourite = require("../models/favourite");
const Blog = require("../models/blog");
const Comment = require("../models/comment");

const handleAddNewBlog = async (req, res) => {
  const { title, content, category } = req.body.blogData;

  try {
    const blog = await Blog.create({
      title,
      content,
      category,
      createdBy: req.user._id,
      coverImageURL: `http://localhost:8000/uploads/${req.file.filename}`,
    });

    return res.status(200).send({ blog , message: "Blog Created Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const handleAddNewComment = async (req, res) => {
  try {
    await Comment.create({
      content: req.body.content,
      blogId: req.params.blogId,
      createdBy: req.user._id,
    });

    return res.status(200).send({ message: "New Comment Added Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const handleGetBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    const comments = await Comment.find({ blogId: req.params.id }).populate(
      "createdBy"
    );
    return res.status(200).send({ blog, comments });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const handleGetAllBlogsByCategory = async (req, res) => {
  const { category } = req.query || "";
  try {
    const blogsByCategory = await Blog.find({
      category: {
        $regex: category,
        $options: "i",
      },
    });
    if (blogsByCategory == []) res.send("No blog found");
    return res.status(200).send(blogsByCategory);
  } catch {
    return res.status(500).send({ error: error.message });
  }
};

const handleGetAllBlogsAfterSort = async (req, res) => {
  const sort = { title: 1 };
  try {
    const sortedBlogs = await Blog.find().sort(sort);
    return res.status(200).send(sortedBlogs);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const handleFavouriteBlogList = async (req, res) => {
  const blog = await Favourite.find({
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });

  if (blog.length) {
    return res.send({ message: "Blog is already present in Favourites" });
  } else {
    try {
      await Favourite.create({
        favourite: true,
        blogId: req.params.blogId,
        createdBy: req.user._id,
      });
      return res
        .status(200)
        .send({ message: "Blog is added to Favourites list Successfully" });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
};

const handleGetFavouriteBlogList = async (req, res) => {
  try {
    const favouriteBlogs = await Favourite.find({
      createdBy: req.user._id,
    });
    
    const blogs = [];

    await Promise.all(
      favouriteBlogs.map(async function (blog) {
        const blogWithID = await Blog.find({
          _id: blog.blogId,
        });
        blogs.push(blogWithID[0]);
      })
    );
    return res.status(200).send(blogs);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  handleAddNewBlog,
  handleAddNewComment,
  handleGetBlogById,
  handleGetAllBlogsByCategory,
  handleGetAllBlogsAfterSort,
  handleFavouriteBlogList,
  handleGetFavouriteBlogList,
};
