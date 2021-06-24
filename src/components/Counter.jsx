import React from "react";

function Counter(props) {
  return (
    <div>
      <div>
        <button onClick={props.incrementHandler}>Increment</button>
        <button onClick={props.decrementHandler}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
