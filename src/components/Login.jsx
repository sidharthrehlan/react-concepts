import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const redirectToAdmin = () => {
    history.push("/admin");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      redirectToAdmin();
    }
  }, []);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (username === "a" && password === "b") {
      localStorage.setItem("token", "adfasdfasdfasdfasdfas");
      redirectToAdmin();
    }
  };

  const changeUsernameHandler = (e) => {
    setusername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setpassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={changeUsernameHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;
