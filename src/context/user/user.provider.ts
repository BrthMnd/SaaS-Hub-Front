import { createContext, useContext } from "react";
import { UserContextType } from "./user";

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useMyContext debe ser usado dentro de un MyProvider");
  }
  return context;
};
