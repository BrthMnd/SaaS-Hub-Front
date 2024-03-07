import { Reducer } from "react";
import { UserAction, UserState } from "./user";

export const initialState: UserState = {
  user: null,
};

export const userReducer: Reducer<UserState, UserAction> = (
  state = initialState,
  action
) => {
  const data = action.payload;
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: {
          id: data.idusuario,
          name: data.nombre,
          email: data.correo,
        },
      };
    case "REMOVE_USER":
      return { user: null };
    default:
      return state;
  }
};
