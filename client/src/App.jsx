import "./App.css";
import { useState, useEffect } from "react";
import { Addblog } from "./components/Addblog";
import { Blog } from "./components/Blog";
import { Featurebar } from "./components/Featurebar";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import Axios from "axios";
import { AllBlogs } from "./components/AllBlogs";
import { BlogsByCategory } from "./components/BlogsByCategory";
import { SortedBlogs } from "./components/SortedBlogs";
import { FavouriteBLogs } from "./components/FavouriteBlogs";

function App() {
  
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path="/blog/add-new" element={<Addblog/>}/>
        <Route path="/blog" element={<BlogsByCategory/>}/>
        <Route path="/blog/sort" element = {<SortedBlogs/>}/>
        <Route path="/blog/favourites" element = {<FavouriteBLogs/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
