import React from "react";

function Hero(props) {
  if (props.name === "Jocker") {
    throw "something wrong";
  }
  return <div>{props.name}</div>;
}

export default Hero;
