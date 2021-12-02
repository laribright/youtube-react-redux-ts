import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { postActions } from "../store";
import { useSelector } from "../hooks/useTypedSelector";
import Loader from "../components/Ui/Loader";
import PostCard from "../components/PostCard/PostCard";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.getPosts());
  }, [dispatch]);

  const { loading, data } = useSelector((state) => state.posts);

  return (
    <div className="container py-5">
      <div className="row">
        {loading ? (
          <Loader />
        ) : (
          data &&
          data.map((post) => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <PostCard post={post} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
