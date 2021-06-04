import { ADD_USER, DELETE_USER } from "redux/actions/actionTypes";

export const addUser = (firstname) => {
  return {
    type: ADD_USER,
    payload: firstname,
  };
};

export const deleteUser = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};
