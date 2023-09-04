import addBlog from "../services/blog/addBlog";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Addblog = () => {

  const navigate = useNavigate();
  const [image,setImage] = useState();
  const [blogData, setBlogData] = useState({
    title:"",
    content:"",
    category:"",
  })
  const handleChange = (e) => {
    setBlogData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };
  const handleImageChange = (e) =>{
    setImage(e.target.files[0])
  }

  const handleAddBlog = async(e)=>{
    e.preventDefault();

    try{
      const formData = {
        blogData,image
      }
      await addBlog(formData);
      navigate(`/`);
    }
    catch(err){
      console.log(err);
    }
 
  }
    return(
        <>
        <Navbar/>
        <div className="container mt-3">
      <form >
        <div className="mb-3">
          <label className="form-label">Cover Image</label>
          <input
            type="file"
            className="form-control"
            id="coverImage"
            name="coverImage"
            accept="image/*"
            aria-describedby="coverImage"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="title"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            placeholder="Write the content of the blog"
            id="content"
            name="content"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            className="form-control"
            id="category"
            name="category"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <button className="btn btn-info" onClick={handleAddBlog}>Add Blog</button>
        </div>
      </form>
    </div>
        </>
    )
  
}
