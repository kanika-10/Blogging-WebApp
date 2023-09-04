const Blog = require("../models/blog");

const handleGetAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({});
    return res.status(200).send(allBlogs);
  } catch {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { handleGetAllBlogs };
