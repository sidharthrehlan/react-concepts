import React, { useState } from 'react';
import useCounter from '../customHook/useCounter';
import './ClickCounterStyle.css';

function ClickCounterHook(props) {
  const diff = 10;
  const [counter, incrementHandler, decrementHandler] = useCounter(diff);
  return (
    <div className='center'>
      <div>Click Counter : {counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

const diff = 10;

export default ClickCounterHook;
