import React, { useEffect, useState } from "react";
import { Table, Alert } from "react-bootstrap";

const url = "https://jsonplaceholder.typicode.com/users";

function Users() {
  const [users, setUsers] = useState([]);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("users", JSON.stringify(data));
        setUsers(data);
      })
      .catch((error) => {
        setMode("offline");
        let userCollection = localStorage.getItem("users");
        setUsers(JSON.parse(userCollection));
      });
  }, []);

  return (
    <div>
      {mode === "offline" && <Alert variant="warning">Site is offline</Alert>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
