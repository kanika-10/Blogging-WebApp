import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import postComment from "../services/blog/postComment";
import { blogbyIdReducer } from "../store/slices/blog/blogByIdSlice";
import { useLocation } from "react-router-dom";

export const Blog = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let loaded = false;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [content, setContent] = useState(""); //comment input

  useEffect(() => {
    dispatch(blogbyIdReducer(`${location.state.blogId}`)).catch((err) => {
      console.log(err);
    });
  }, []);

  const data = useSelector((state) => state.blogDetails.singleBlogDetails);
  const blog = data.blog;
  const comments = data.comments;

  if (blog && comments) loaded = true;

  const handleBackButton = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddNewComment = (e, blogId) => {
    e.preventDefault();
    const data = { blogId, content };

    try {
      postComment(data);
      window.location.reload();
    } catch (error) {
      console.log(err);
    }
  };

  if (!loaded) return <div>loading</div>;
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <button className="btn btn-primary" onClick={handleBackButton}>
          Back
        </button>
        <h1>{blog.title}</h1>
        <img src={blog.coverImageURL} width="500px" />
        <p className="mt-3">{blog.content}</p>
      </div>
      <div className="container mt-4">
        <img src={blog.createdBy.profileImageURL} width="50px" />
        {blog.createdBy.fullName}
      </div>
      <div className="container mt-4">
        <h1>Comments ({comments.length}) </h1>
        <form>
          {currentUser && (
            <div className="mb-3 mt-4">
              <input
                type="text"
                className="form-control"
                name="content"
                placeholder="Enter your comment"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => handleAddNewComment(e, `${blog._id}`)}
              >
                Post
              </button>
            </div>
          )}
        </form>
        <div className="mt-3">
          {comments.map((comment) => {
            return (
              <div key={comment._id}>
                <img src={comment.createdBy.profileImageURL} width="50px" />
                {comment.createdBy.fullName}
                <p>{comment.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
