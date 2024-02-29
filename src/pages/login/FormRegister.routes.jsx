import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { VerifyToken } from "../../hooks/token";
import { LoadingComponent } from "../../components/Loading.component";

export function VerifyEmail() {
  const [isValid, seTisValid] = useState(null);
  const { token } = useParams();

  useEffect(() => {
    // const validToken = VerifyToken(token)
    //   .then((isValid) => isValid)
    //   .catch((error) => error);
    // if (!validToken) {
    //   navigate("/");
    // }
  }, []);
  console.log(token);
  return <h1>Hola</h1>;
  // return isValid ? <h1>hola</h1> : <LoadingComponent />;
}
