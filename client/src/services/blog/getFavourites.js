import instance from "../instance";

const getFavourites = () =>
  instance({
    method: "post",
    url: "/blog/favourites",
  });

export default getFavourites ;