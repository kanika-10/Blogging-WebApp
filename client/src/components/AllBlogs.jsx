import { useState } from "react";
import { useNavigate } from "react-router";
import addToFavourites from "../services/blog/addToFavourites";

export const AllBlogs = (data) => {
  
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const blogs = data.data;

  const handleRead = async (blogId) => {
    navigate(`/blog/${blogId}`, { state: { blogId: `${blogId}` } });
  };

  const handleAddToFavourite = async(blogId) =>{
    try{
      await addToFavourites(blogId);
    }
    catch(err){
      console.log(err);
    }
    
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row row-cols-4">
          {blogs.map((blog) => {
            return (
              <div className="col" key={blog._id}>
                <div className="card col mt-2" style={{ width: "18rem" }}>
                  <img
                    src={blog.coverImageURL}
                    className="card-img-top"
                    alt="..."
                    width="10rem"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> {blog.title} </h5>
                    <button
                      onClick={() => handleRead(`${blog._id}`)}
                      className="btn btn-primary"
                    >
                      Read
                    </button>
                      {currentUser && <button className="btn btn-success m-2" onClick={()=> handleAddToFavourite(`${blog._id}`)}>
                        Favourite
                      </button>}
                  </div>
                </div>
              </div>
            );
          })}
          {blogs.length === 0 && <h2>NO BLOG FOUND</h2>}
        </div>
      </div>
    </>
  );
};
