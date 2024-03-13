import { createContext, useContext } from "react";
import { UserContextType } from "./user";

export const AuthUserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useAuthUserContext = () => {
  const context = useContext(AuthUserContext);
  if (!context) {
    throw new Error("useMyContext debe ser usado dentro de un MyProvider");
  }
  return context;
};
