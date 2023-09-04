import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import { Featurebar } from "./Featurebar";
import { AllBlogs } from "./AllBlogs";
import { useEffect, useState } from "react";
import { getSortedBlogsReducer } from "../store/slices/blog/sortedBlogsSice";

export const SortedBlogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSortedBlogsReducer())
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const blogs = useSelector((state) => state.sortedBlogs.sortedBlogs);

  return (
    <>
      <Navbar />
      <Featurebar />
      {blogs && <AllBlogs data={blogs} />}
    </>
  );
};
