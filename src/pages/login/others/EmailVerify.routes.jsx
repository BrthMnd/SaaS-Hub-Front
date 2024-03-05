import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VerifyToken } from "../../../hooks/token";
import { LoadingComponent } from "../../../components/Loading.component";

export function VerifyEmail() {
  const [valid, setValid] = useState(null);
  const [Loading, setLoading] = useState(true);
  const { token } = useParams();

  useEffect(() => {
    console.log("verifying email...");
    VerifyToken(token)
      .then((isValid) => setValid(isValid))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  if (Loading) return <LoadingComponent />;
  return valid ? (window.location.href = "/") : <h1>Ha ocurrido un error</h1>;
}
