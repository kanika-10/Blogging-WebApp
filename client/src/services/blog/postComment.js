import instance from "../instance";
import blogById from "./blogById";

const postComment = (data) => {
  if (data) {
    instance({
      method: "post",
      url: `blog/comment/${data.blogId}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    });
  }
};
export default postComment;
