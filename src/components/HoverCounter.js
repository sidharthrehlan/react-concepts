import React, { Component } from "react";
import withCounter from "../HOC/WithCounter";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.actionHandler}>
          Hover here {this.props.count}
        </h2>
      </div>
    );
  }
}

const increment = 10;

export default withCounter(HoverCounter, increment);
