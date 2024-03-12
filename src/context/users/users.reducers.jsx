// UserContext.js
import React, { createContext, useState, useContext } from "react";
import axios from "../../libs/axios.libs";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const LoadUser = async () => {
    try {
      const data = await axios.get('/user') 
      setUsers(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <UserContext.Provider value={{ 
      users, 
      loading, 
      error, 
      LoadUser, 
      setUsers }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe ser utilizado dentro de un UserProvider");
  }
  return context;
};
