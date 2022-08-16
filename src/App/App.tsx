import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import Loader from "../components/Ui/Loader";
import PostCard from "../components/PostCard/PostCard";
import { getPosts } from "../features/posts/postSlice";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { loading, data } = useAppSelector((state) => state);

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
