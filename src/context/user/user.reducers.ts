import { Reducer } from "react";
import { AuthUserAction, AuthUserState } from "./user";

export const initialState: AuthUserState = {
  user: null,
};

export const AuthUserReducer: Reducer<AuthUserState, AuthUserAction> = (
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
          role: data.rol,
          status: data.estado,
        },
      };
    case "REMOVE_USER":
      return { user: null };
    default:
      return state;
  }
};
