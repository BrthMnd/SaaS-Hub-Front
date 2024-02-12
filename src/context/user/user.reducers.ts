import { Reducer } from "react";
import { UserAction, UserState, UserType } from "./user";

export const initialState: UserState = {
  users:
  {
    id: "",
    name: "",
    email: "",
  }
};
export const userReducer: Reducer<UserState, UserAction> = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { users: action.payload };
    case 'REMOVE_USER':
      return { users: {} }
    default:
      return state;
  }
};
