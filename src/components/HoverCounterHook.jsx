import React from 'react';
import './ClickCounterStyle.css';
import useCounter from '../customHook/useCounter';

function HoverCounterHook() {
  const diff = 5;
  const [counter, incrementHandler, decrementHandler] = useCounter(diff);
  return (
    <div className='center'>
      <div>Hover Counter : {counter}</div>
      <div className='red' onMouseOver={incrementHandler}>
        Increment
      </div>
      <div className='green' onMouseLeave={decrementHandler}>
        Decrement
      </div>
    </div>
  );
}

export default HoverCounterHook;
