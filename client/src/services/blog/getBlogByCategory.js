import instance from "../instance";

const getBlogByCategory = (searchInput) =>
  instance({
    method: "get",
    url: `/blog?category=${searchInput}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

export default getBlogByCategory;