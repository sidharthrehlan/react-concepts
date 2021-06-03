import React, { Component, useContext } from "react";
import context, { UserConsumer } from "../context/UserContext";

/**
 *
 * @returns Method 1
 */
// const SubsubMenu = () => {
//   const ctx = useContext(context);
//   return <div>Sub sub menu {ctx}</div>;
// };

/**
 * Method 2
 */

class SubsubMenu extends Component {
  render() {
    return (
      <UserConsumer>
        {(ctx) => {
          return <div>Sub sub menu {ctx}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default SubsubMenu;
