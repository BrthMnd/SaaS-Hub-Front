import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VerifyToken } from "../../hooks/token";
import { LoadingComponent } from "../../components/Loading.component";

export async function FormRegister() {
  const [isValid, seTisValid] = useState(null);
  const { token } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const validToken = VerifyToken(token)
      .then((isValid) => isValid)
      .catch((error) => error);
    if (!validToken) {
      navigate("/");
    }
  }, []);

  return isValid ? <h1>hola</h1> : <LoadingComponent />;
}

