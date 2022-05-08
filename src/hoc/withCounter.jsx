import React, { useState } from 'react';

const withCounter = (WrappedComponent, diff) => {
  const WithCounter = (props) => {
    const [counter, setCounter] = useState(0);
    const incrementHandler = () => {
      setCounter((counter) => counter + diff);
    };

    const decrementHandler = () => {
      setCounter((counter) => counter - diff);
    };

    return (
      <WrappedComponent
        counter={counter}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        {...props}
      />
    );
  };

  return WithCounter;
};
export default withCounter;

// }
