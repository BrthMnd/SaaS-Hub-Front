import React, { useReducer, FC } from "react";
import { initialState, AuthUserReducer } from "./user/user.reducers";
import { AuthUserContext } from "./user/user.provider";
import { StoreProps } from "./provider";

export const Store: FC<StoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthUserReducer, initialState);

  return (
    <AuthUserContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthUserContext.Provider>
  );
};
