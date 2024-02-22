import cookie from "js-cookie";
import { Permissions } from "./index.d";
export async function reChargeForToken(dispatch, navigate, location) {
  const { token } = cookie.get();

  if (token) {
    dispatch({ type: Permissions.ADMIN });
  } else if (location.pathname.startsWith("/authenticate/VerifyEmail/")) {
    dispatch({ type: Permissions.USER });
  } else {
    console.log("no token");
    dispatch({ type: Permissions.USER });
    navigate("/authenticate/login");
  }
}
//todo axios get token verification aqui y en form register,
