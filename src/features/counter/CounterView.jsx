import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, numberofincrement, reset } from "./counterSlice";

function CounterView() {
  const state = useSelector((state) => state);
  const { count } = state.counter;
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(numberofincrement(13));
        }}
      >
        Increment By 13
      </button>
    </div>
  );
}

export default CounterView;
