import { Dispatch } from "react";
import { initialState } from "./user.reducers";

export interface UserAction {
    type: string;
    payload?: any;
}
export interface UserType {
    id: string
    name: string
    email: string
}
export interface UserContextType {
    state: typeof initialState;
    dispatch: Dispatch<UserAction>;
}
export interface User {
    id: string;
    name: string;
    email: string;
}
export interface UserState {
    users: User
}