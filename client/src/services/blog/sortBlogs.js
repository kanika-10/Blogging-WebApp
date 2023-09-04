import instance from "../instance";

const sortBlogs = () =>
  instance({
    method: "post",
    url: `/blog/show`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

export default sortBlogs;