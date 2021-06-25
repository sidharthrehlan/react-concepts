import React, { useRef } from "react";
import Child from "./Child";

/**
 * Forward ref is a technique used to pass ref from parent component
 * to child component so that parent component can access its child
 * component ref
 * @returns
 */

function Parent() {
  const clickHandler = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  const inputRef = useRef();

  return (
    <div>
      <Child ref={inputRef}></Child>
      <button onClick={clickHandler}>Click here</button>
    </div>
  );
}

export default Parent;
