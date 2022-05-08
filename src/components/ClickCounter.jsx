import React, { useState } from 'react';
import './ClickCounterStyle.css';
import withCounter from '../hoc/withCounter';

function ClickCounter(props) {
  return (
    <div className='center'>
      <div>Click Counter : {props.counter}</div>
      <button onClick={props.incrementHandler}>Increment</button>
      <button onClick={props.decrementHandler}>Decrement</button>
    </div>
  );
}

const diff = 10;

export default withCounter(ClickCounter, diff);
