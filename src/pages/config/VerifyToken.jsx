import cookie from "js-cookie";
import { Permissions } from "./index.d";
export function VerifyToken(dispatch, navigate) {
  const { token } = cookie.get();
  console.log(token);
  if (token) {
    console.log("token");
    dispatch({ type: Permissions.ADMIN });
  } else {
    console.log("no token");
    dispatch({ type: Permissions.USER });
    navigate("/authenticate/login");
  }
}
