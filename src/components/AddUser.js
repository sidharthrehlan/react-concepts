import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "redux/actions/actionCreators";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.userRef = React.createRef();
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    const firstname = this.userRef.current.value;
    this.props.addUser(firstname);
  };

  render() {
    return (
      <section>
        <h2>Add User Form</h2>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            ref={this.userRef}
          />
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (firstname) => dispatch(addUser(firstname)),
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
