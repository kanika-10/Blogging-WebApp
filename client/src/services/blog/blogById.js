import instance from "../instance";

const blogById = (blogId) =>
  instance({
    method: "get",
    url: `/blog/${blogId}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

export default blogById;