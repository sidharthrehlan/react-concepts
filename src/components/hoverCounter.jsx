import React, { useState } from 'react';
import './ClickCounterStyle.css';
import withCounter from '../hoc/withCounter';

function HoverCounter(props) {
  return (
    <div className='center'>
      <div>Hover Counter : {props.counter}</div>
      <div className='red' onMouseOver={props.incrementHandler}>
        Increment
      </div>
      <div className='green' onMouseLeave={props.decrementHandler}>
        Decrement
      </div>
    </div>
  );
}
const diff = 5;

export default withCounter(HoverCounter, diff);
