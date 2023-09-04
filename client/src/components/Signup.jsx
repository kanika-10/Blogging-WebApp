import { useState } from "react";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";
import signup from "../services/auth/signup";

export const Signup = () => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(inputs);
      navigate("/signin");
    } catch (err) {
      console.log(err);
      navigate("/signup");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form action="http://localhost:8000/user/signup" method="post">
          <div className="mb-3 mt-4">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              aria-describedby="fullName"
              name="fullName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-4">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSignup}
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
};
