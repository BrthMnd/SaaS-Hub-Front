import React, { useReducer, FC } from "react";
import { initialState, userReducer } from "./user/user.reducers";
import { UserContext } from "./user/user.provider";
import { StoreProps } from "./provider";

export const Store: FC<StoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
