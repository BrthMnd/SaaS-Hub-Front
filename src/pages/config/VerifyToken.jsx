import cookie from "js-cookie";
import { Permissions } from "./index.d";
import { VerifyTokenLogin } from "../../hooks/token";
export async function reChargeForToken(
  dispatch,
  navigate,
  location,
  dispatchUser
) {
  const { token } = cookie.get();

  if (token) {
    VerifyTokenLogin(token)
      .then((data) => {
        console.log(data.data.info);
        dispatch({ type: Permissions.ADMIN });
        dispatchUser({ type: "ADD_USER", payload: data.data.info });
      })
      .catch((error) => console.log(error));
  } else if (location.pathname.startsWith("/authenticate/VerifyEmail/")) {
    dispatch({ type: Permissions.USER });
  } else {
    console.log("no token");
    dispatch({ type: Permissions.USER });
    navigate("/authenticate/login");
  }
}
//todo axios get token verification aqui y en form register,
