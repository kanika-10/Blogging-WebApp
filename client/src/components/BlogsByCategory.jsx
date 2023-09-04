import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import { Featurebar } from "./Featurebar";
import { AllBlogs } from "./AllBlogs";
import { useEffect } from "react";
import { getblogByCategoryReducer } from "../store/slices/blog/blogsByCategorySlice";
import { useLocation } from "react-router";

export const BlogsByCategory = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const searchInput = location.state.searchInput;

  useEffect(() => {
    dispatch(getblogByCategoryReducer(searchInput))
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);

  const blogs = useSelector((state) => state.blogsByCategory.blogsByCategory);

  return (
    <>
      <Navbar />
      <Featurebar />
      {blogs && <AllBlogs data={blogs} />}
    </>
  );
};
