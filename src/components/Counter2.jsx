import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { ...state, firstCounter: state.firstCounter + action.payload };
    }
    case "decrement": {
      return { ...state, firstCounter: state.firstCounter - action.payload };
    }
    case "increment2": {
      return { ...state, secondCounter: state.secondCounter + action.payload };
    }
    case "decrement2": {
      return { ...state, secondCounter: state.secondCounter - action.payload };
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Counter1 - {count.firstCounter}</div>
      <div>Counter2 - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment1
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement1
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement5
      </button>
      <button onClick={() => dispatch({ type: "increment2", payload: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", payload: 1 })}>
        Decrement Counter 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter2;
