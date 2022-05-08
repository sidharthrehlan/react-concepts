import '../ClickCounterStyle.css';

function ClickCounter(props) {
  return (
    <div className='center'>
      <div>Click Counter : {props.counter}</div>
      <button onClick={props.incrementHandler}>Increment</button>
      <button onClick={props.decrementHandler}>Decrement</button>
    </div>
  );
}

export default ClickCounter;
