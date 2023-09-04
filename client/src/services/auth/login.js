import instance from "../instance";

const login = (data) =>
  instance({
    method: "post",
    url: "user/signin",
    data: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

export default login;
