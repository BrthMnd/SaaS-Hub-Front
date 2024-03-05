import { useState } from "react";
import { NavLink } from "react-router-dom"; // Cambio de useHistory a Redirect
import { SchemaLoginValidate } from "../../helpers/validate/login.validate";
import { ApiPost } from "../../hooks/useApi";
import { DATA_URL_LOGIN } from "../../assets/DATA_URL";
import { isAxiosError } from "axios";
import { ValidationError } from "yup";
import { InputPassword } from "./others/password.component";
import loginGif from "../../assets/images/LoginGif.gif";
import toast, { Toaster } from 'react-hot-toast';

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
        setError(res.response.data.message);
        setTimeout(() => {
          setError(null);
        }, 4000);
      } else {
        // Almacenar los datos del usuario en localStorage
        localStorage.setItem("userData", JSON.stringify(res.data));
        window.location.href = "/perfil";
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        setError(error.message);
        setTimeout(() => {
          setError(null);
        }, 4000);
      } else {
        console.log(error);
        setError("Error desconocido en login routes");
      }
    }
  };

  const alerts = (err) => {
    toast.error(err);
  }

  // Si el usuario ha iniciado sesión, redirigirlo a la página de perfil
 

  return (
    <>
      <div className="divBackground">
        <section className="divMainLogin d-flex">
          <form onSubmit={handleSubmit} className=" d-flex justify-content-center align-items-center">
            <aside className="divLeft login-content bg-white p-5 rounded-5 text-secondary" style={{ width: "25rem" }}>
              <div className="d-flex justify-content-center"></div>
              <div className="text-center text-dark font-weight-bold">Iniciar Sesión</div>
              <div className="input-group mt-4">
                <div className="input-group-text bg-dark">
                  <i className="far fa-envelope"></i>
                </div>
                <input
                  className="correoLogin form-control bg-light"
                  type="email"
                  placeholder="Correo"
                  name="email"
                  required
                />
              </div>
              <div className="input-group mt-1">
                <div className="input-group-text bg-dark">
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
              <button className="btn btn-dark  text-white w-100 mt-2 fw-semibold shadow-sm">
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
            </aside>
          </form>
          <div className="gifLogin">
            <img src={loginGif} alt="" width="450px" />
          </div>
        </section>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {err && (
        <div className="" role="alert">
          {alerts(err)}
        </div>
      )}
    </>
  );
}
