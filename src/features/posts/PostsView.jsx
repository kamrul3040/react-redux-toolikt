import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

function PostsView() {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  console.log(posts);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {posts &&
        posts.map((post) => {
          console.log(post.id);
          const { id, title, body } = post;
          return (
            <section key={id}>
              <article>
                <h4>Title: {title}</h4>
                <p>Description: {body}</p>
              </article>
              ;
            </section>
          );
        })}
    </div>
  );
}

export default PostsView;
