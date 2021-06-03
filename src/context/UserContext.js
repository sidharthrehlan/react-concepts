import React from "react";

const userContext = React.createContext("karan");

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export { UserConsumer, UserProvider };

export default userContext;
