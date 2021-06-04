import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "store/userReducer";

function UsersList() {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClickEdit = (user) => {};

  const onClickDelete = (user) => {
    dispatch(deleteUser(user));
  };
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
          {users.users.map((user) => {
            return (
              <tr key={user.id}>
                <td className="username">{user.firstname}</td>
                <td
                  className="edit-link"
                  onClick={() =>
                    onClickEdit({ id: user.id, firstname: user.firstname })
                  }
                >
                  Edit
                </td>
                <td
                  className="delete-link"
                  onClick={() =>
                    onClickDelete({ id: user.id, firstname: user.firstname })
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

export default UsersList;
