import { useState } from "react";
import { ValidationError } from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { SchemaLoginValidate } from "../../helpers/validate/login.validate";
import { ApiPost } from "../../hooks/useApi";
export function Register() {
  const navigate = useNavigate();
  const [err, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.password.value != e.target.vpassword.value) {
      setError("Las contraseñas no son iguales");
      return;
    }
    const envio = {
      correo: e.target.email.value,
      clave: e.target.password.value,
      vclave: e.target.vpassword.value,
    };
    try {
      await SchemaLoginValidate.validate(envio);
      const res = await ApiPost("/register", envio);

      if (isAxiosError(res)) {
        console.log("instance error ");
        setError(res.response.data.message);
      } else {
        window.location.reload();
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
        className="login-container bg-gray d-flex justify-content-center align-items-center vh-100  "
        onSubmit={handleSubmit}
      >
        <div
          className="login-content bg-white p-5 rounded-5 text-secondary"
          style={{ width: "25rem" }}
        >
          <div className="d-flex justify-content-center"></div>
          <div className="text-center fs-1 fw-bold">Registro</div>
          <div className="input-group mt-4">
            <div className="input-group-text bg-gray">
              <i className="far fa-envelope"></i>
            </div>
            <input
              className="form-control bg-light"
              type="text"
              placeholder="E-mail"
              name="email"
            />
          </div>
          <div className="input-group mt-3">
            <div className="input-group-text bg-gray">
              <i className="fas fa-lock"></i>
            </div>
            <input
              className="form-control bg-light"
              type="password"
              placeholder="Contraseña"
              name="password"
            />
          </div>
          <div className="input-group mt-3">
            <div className="input-group-text bg-gray">
              <i className="fas fa-lock"></i>
            </div>
            <input
              className="form-control bg-light"
              type="password"
              placeholder="Verificar Contraseña"
              name="vpassword"
            />
          </div>

          <button className="btn btn-secondary  text-white w-100 mt-2 fw-semibold shadow-sm">
            Registrar
          </button>
          <div className="d-flex gap-1 justify-content-center mt-3">
            <div>Ya tienes una cuenta? </div>
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
