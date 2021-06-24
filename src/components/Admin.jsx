import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Admin() {
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };

  const redirectToLogout = () => {
    history.push("/logout");
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      redirectToHome();
    }
  }, []);

  const clickHandler = () => {
    redirectToLogout();
  };

  return (
    <div>
      <h2>This is Admin Page</h2>
      <div>
        <button onClick={clickHandler}>Logout</button>
      </div>
    </div>
  );
}

export default Admin;
