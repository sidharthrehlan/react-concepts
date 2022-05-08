import { useState } from 'react';

const useCounter = (diff) => {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter((counter) => counter + diff);
  };

  const decrementHandler = () => {
    setCounter((counter) => counter - diff);
  };

  return [counter, incrementHandler, decrementHandler];
};

export default useCounter;
