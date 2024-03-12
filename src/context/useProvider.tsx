import React, { useReducer, FC } from "react";
import { initialState, AuthUserReducer } from "./Auth/user.reducers";
import { AuthUserContext } from "./Auth/user.provider";
import { StoreProps } from "./provider";
import { UserProvider } from "./users/users.reducers";

export const Store: FC<StoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthUserReducer, initialState);
  return (
    <AuthUserContext.Provider value={{ state, dispatch }}>
      <UserProvider>
      {children}
      </UserProvider>
    </AuthUserContext.Provider>
  );
};
