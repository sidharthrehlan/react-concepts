import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setcounter] = useState(0);
  const incrementHandler = () => {
    setcounter((counter) => counter + 1);
  };

  const decrementHandler = () => {
    setcounter((counter) => counter - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <Counter
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      ></Counter>
    </div>
  );
}

export default App;
