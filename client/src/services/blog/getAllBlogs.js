import instance from "../instance";

const getAllBlogs = () =>
  instance({
    method: "get",
    url: "",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

export default getAllBlogs;