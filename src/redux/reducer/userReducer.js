import { ADD_USER, DELETE_USER } from "redux/actions/actionTypes";
const initialState = {
  users: [],
  numberOfUser: 0,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const currentState = { ...state };
      const userId = Math.floor(Math.random() * 1000000);
      currentState.users = [
        ...currentState.users,
        { id: userId, firstname: action.payload },
      ];
      currentState.numberOfUser = currentState.numberOfUser + 1;
      return currentState;
    }
    case DELETE_USER: {
      const { id } = action.payload;
      //  let leftUsers = [];

      const currentState = { ...state };
      currentState.users = currentState.users.filter((user) => {
        return user.id !== id;
      });

      currentState.numberOfUser = currentState.numberOfUser - 1;
      return currentState;
    }
    default:
      return state;
  }
};

export default userReducer;
