import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Featurebar } from "./Featurebar";
import getAllBlogs from "../services/blog/getAllBlogs";
import { AllBlogs } from "./AllBlogs";
import {Loading } from "./Loading";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const allBlogs = async () => {
      const result = await getAllBlogs();
      setBlogs(result.data);
      setLoaded(true);
    };
    allBlogs();
  }, []);

  if (loaded == false) return (<div>
     <Navbar />
      <Featurebar />
    <Loading  type="balls" color="#fff"/>
    </div>)

  return (
    <>
      <Navbar />
      <Featurebar />
      {blogs && <AllBlogs data={blogs} />}
    </>
  );
};
