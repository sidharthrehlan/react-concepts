import React, { useState } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter((counter) => counter + 2);
  };

  const decrementHandler = () => {
    setCounter((counter) => counter - 2);
  };

  return props.children(counter, incrementHandler, decrementHandler);
}

export default Counter;
