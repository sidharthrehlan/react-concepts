import React, { Component } from "react";

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

export default HoverCounter;
