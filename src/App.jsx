import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";
function App() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <CounterView />
        <PostsView />
      </div>
    </>
  );
}

export default App;
