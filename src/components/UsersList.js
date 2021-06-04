import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "redux/actions/actionCreators";

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  onClickDelete = (user) => {
    this.props.deleteUser(user);
  };

  render() {
    console.log("users....", this.props.users);
    return (
      <section>
        <h2>Users List</h2>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {typeof this.props.users !== undefined &&
              this.props.users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td className="username">{user.firstname}</td>
                    <td className="edit-link">Edit</td>
                    <td
                      className="delete-link"
                      onClick={() =>
                        this.onClickDelete({
                          id: user.id,
                          firstname: user.firstname,
                        })
                      }
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (user) => dispatch(deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
