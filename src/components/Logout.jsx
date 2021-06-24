import React from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();
  const clickHandler = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return <button onClick={clickHandler}>Login Again</button>;
}

export default Logout;
