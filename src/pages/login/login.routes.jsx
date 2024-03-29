import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SchemaLoginValidate } from "../../helpers/validate/login.validate";
import { ApiPost } from "../../hooks/useApi";
import { DATA_URL_LOGIN } from "../../assets/DATA_URL";
import { isAxiosError } from "axios";
import { ValidationError } from "yup";
import { InputPassword } from "./others/password.component";
export function Login() {
  const [err, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const envio = {
      correo: e.target.email.value,
      clave: e.target.password.value,
    };
    try {
      await SchemaLoginValidate.validate(envio);
      const res = await ApiPost(DATA_URL_LOGIN, envio);

      if (isAxiosError(res)) {
        console.log("instance error ");
        setError(res.response.data.message);
      } else {
        window.location.href = "/";
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
          <div className="text-center fs-1 fw-bold">Iniciar Sesión</div>
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
          <div className="input-group mt-1">
            <div className="input-group-text bg-gray">
              <i className="fas fa-lock"></i>
            </div>
            <InputPassword />
          </div>
          <div className="d-flex justify-content-around mt-1">
            <div className="pt-1">
              <NavLink
                to="/authenticate/recovery"
                className="text-decoration-none text-info fw-semibold fst-italic"
              >
                ¿Olvidaste la contraseña?
              </NavLink>
            </div>
          </div>
          <button className="btn btn-secondary  text-white w-100 mt-2 fw-semibold shadow-sm">
            Ingresar
          </button>
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>¿No tienes una cuenta?</div>
            <NavLink
              to="/authenticate/register"
              className="text-decoration-none text-info fw-semibold"
            >
              Registrarse
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
