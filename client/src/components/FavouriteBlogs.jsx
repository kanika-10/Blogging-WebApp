import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import { Featurebar } from "./Featurebar";
import { AllBlogs } from "./AllBlogs";
import { useEffect } from "react";
import { getFavouriteBlogsReducer } from "../store/slices/blog/favouriteBlogsSlice";

export const FavouriteBLogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavouriteBlogsReducer())
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const blogs = useSelector((state) => state.favouriteBlogs.favouriteBlogs);

  return (
    <>
      <Navbar />
      <Featurebar />
      {blogs && <AllBlogs data={blogs} />}
    </>
  );
};
