import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    numberOfUser: 0,
  },

  reducers: {
    addUser: (state, action) => {
      const userId = Math.floor(Math.random() * 1000000);
      state.users = [
        ...state.users,
        { id: userId, firstname: action.payload.firstname },
      ];
      state.numberOfUser = state.numberOfUser + 1;
      console.log("state....", state);
    },
    deleteUser: (state, action) => {
      console.log("state222", state);
      const { id } = action.payload;
      //  let leftUsers = [];

      state.users = state.users.filter((user) => {
        return user.id !== id;
      });

      //   [{ id: id, firstname: firstname }, ...leftUsers] = state.users;
      //   state.users = leftUsers;

      state.numberOfUser = state.numberOfUser - 1;
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
