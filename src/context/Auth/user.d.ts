import { Dispatch } from "react";
import { initialState } from "./user.reducers";

export interface AuthUserAction {
  type: string;
  payload?: any;
}
export interface AuthUserType {
  id: string;
  name: string;
  email: string;
}
export interface UserContextType {
  state: typeof initialState;
  dispatch: Dispatch<AuthUserAction>;
}
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}
export interface AuthUserState {
  user: AuthUser | null;
}
