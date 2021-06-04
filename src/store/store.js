import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "store/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
