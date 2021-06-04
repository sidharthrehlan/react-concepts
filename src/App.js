import React from "react";
import AddUser from "components/AddUser";
import UsersList from "components/UsersList";
import store from "store/store";
import { Provider } from "react-redux";
import "App.css";

function App() {
  return (
    <Provider store={store}>
      <main>
        <AddUser />
        <UsersList />
      </main>
    </Provider>
  );
}

export default App;
