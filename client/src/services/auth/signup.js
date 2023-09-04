import instance from "../instance";

const signup = (data) =>
  instance({
    method: "post",
    url: "user/signup",
    data: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

export default signup;