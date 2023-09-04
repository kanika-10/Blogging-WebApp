import { combineReducers } from "@reduxjs/toolkit";
import blogDetailsSlice from "./blog/blogByIdSlice";
import userSlice from "./login/userSlice";
import blogsByCategorySlice from "./blog/blogsByCategorySlice";
import  sortBlogsSlice  from "./blog/sortedBlogsSice";
import favouriteBlogsSlice from "./blog/favouriteBlogsSlice";
import  logoutSlice  from "./logout/logoutSlice";


export default combineReducers({
  user: userSlice,
  logout: logoutSlice,
  blogDetails: blogDetailsSlice,
  blogsByCategory: blogsByCategorySlice,
  sortedBlogs: sortBlogsSlice,
  favouriteBlogs: favouriteBlogsSlice
});
