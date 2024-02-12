import { useState } from "react";
import { ApiPost } from "../../hooks/useApi";
import cookie from "js-cookie";
import { isAxiosError } from "axios";
import { ValidationError } from "yup";
import { NavLink, useNavigate } from "react-router-dom";

export function SendCode() {
  const navigate = useNavigate();
  const [err, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const envio = {
      correo: e.target.email.value,
    };
    try {
      const res = await ApiPost("/recovery", envio);
      if (isAxiosError(res)) {
        console.log("instance error ");
        setError(res.response.data.message);
      } else {
        cookie.set("CodeVerify", res.data.info);
        navigate("/authenticate/verifyCode");
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        setError(error.message);
      } else {
        console.log(error);
        setError("Error desconocido en login routes");
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="login-container bg-gray d-flex justify-content-center align-items-center vh-100  "
      >
        <div
          className="login-content bg-white p-5 rounded-5 text-secondary"
          style={{ width: "25rem" }}
        >
          <div className="d-flex justify-content-center"></div>
          <div className="text-center fs-1 fw-bold">
            Recuperacion de contraseña
          </div>
          <div className="input-group mt-4">
            <div className="input-group-text bg-gray">
              <i className="far fa-envelope"></i>
            </div>
            <input
              className="form-control bg-light"
              type="text"
              placeholder="Usuario"
              name="email"
            />
          </div>

          <button className="btn btn-secondary  text-white w-100 mt-2 fw-semibold shadow-sm">
            Ingresar
          </button>
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>¿Ya tienes cuenta?</div>
            <NavLink
              to="/authenticate/login"
              className="text-decoration-none text-info fw-semibold"
            >
              Ingresa
            </NavLink>
          </div>
          {err && (
            <div className="alert alert-danger" role="alert">
              {err}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
