import instance from "../instance";

const addToFavourites = (blogId) =>
  instance({
    method: "post",
    url: `blog/favourites/${blogId}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

export default addToFavourites ;