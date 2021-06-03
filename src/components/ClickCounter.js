import React, { Component } from "react";
import withCounter from "../HOC/WithCounter";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.actionHandler}>
          {this.props.count} Click Here {this.props.name}
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 20);
