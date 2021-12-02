import { FC } from "react";

import Post from "../../models/postModel";

interface PostProps {
  post: Post;
}

const PostCard: FC<PostProps> = (props) => {
  const {
    post: { body, title, id },
  } = props;

  return (
    <div className="card">
      <div className="card-header">{id}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <div className="btn btn-primary">Read More...</div>
      </div>
    </div>
  );
};

export default PostCard;
