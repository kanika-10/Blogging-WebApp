import instance from "../instance";

const addBlog = (data) =>
  instance({
    method: "post",
    url: "blog",
    data: data,
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded",
      "Content-Type": "multipart/form-data",
      // "enctype":"multipart/form-data"
    },
    // enctype:"multipart/form-data"
  });

export default addBlog;