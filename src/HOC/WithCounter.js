import React, { Component } from "react";

const withCounter = (WrappedComponent, increment) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    actionHandler = () => {
      this.setState((prevState) => ({
        count: prevState.count + increment,
      }));
    };

    render() {
      return (
        <WrappedComponent
          actionHandler={this.actionHandler}
          count={this.state.count}
          {...this.props}
        ></WrappedComponent>
      );
    }
  }
  return WithCounter;
};

export default withCounter;
