import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.actionHandler}>
          {this.props.count} Click Here
        </button>
      </div>
    );
  }
}

export default ClickCounter;
