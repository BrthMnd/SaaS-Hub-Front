import { useState } from "react";
import { ValidationError } from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { SchemaLoginValidate } from "../../helpers/validate/login.validate";
import { ApiPost } from "../../hooks/useApi";
import loginGif from "../../assets/images/LoginGif.gif"


export function Register() {
  const navigate = useNavigate();
  const [err, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.vpassword.value) {
      setError("Las contraseñas no coinciden");
      setTimeout(() => {
        setError(null); // Eliminar el error después de 4 segundos
      }, 4000);
      return;
    }
    const envio = {
      nombre: e.target.nombre.value,
      genero: e.target.genero.value,
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
        setTimeout(() => setError(null), 4000); // después de 4 segundos
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
      <div className="divBackground">
        <div className="divMainLogin d-flex">

          <form
            className="login-container d-flex justify-content-center align-items-center"
            onSubmit={handleSubmit}
          >
            <div className="divLeft login-content bg-white p-5 rounded-5 text-secondary" style={{ width: "25rem" }}>

              <div className="d-flex justify-content-center"></div>
              <div className="text-center fs-1 fw-bold">Registro</div>

              <div className="input-group mt-3">
                <div className="input-group-text bg-dark">
                  <i className="far fa-user"></i>
                </div>
                <input className="form-control bg-light" type="text" placeholder="Nombre" name="nombre" required />
              </div>

              <div className="input-group mt-3">
                <div className="input-group-text bg-dark">
                  <i className="far fa-envelope"></i>
                </div>
                <input className="form-control bg-light" type="text" placeholder="Correo" name="email" required />
              </div>


              <div className="input-group mt-3">
                <div className="input-group-text bg-dark">
                  <i className="fas fa-lock"></i>
                </div>
                <input className="form-control bg-light" type="password" placeholder="Contraseña" name="password" required />
              </div>

              <div className="input-group mt-3">
                <div className="input-group-text bg-dark">
                  <i className="fas fa-lock"></i>
                </div>
                <input className="form-control bg-light" type="password" placeholder="Verificar Contraseña" name="vpassword" title="Verifica la contraseña" required />
              </div>

              <div className="input-group mt-3">

                <div className="input-group-text bg-dark">
                  <i className="fas fa-venus-mars"></i>
                </div>

                <select className="form-control bg-light" id="genero" name="genero" required>
                  <option value="" disabled selected hidden>
                    Género
                  </option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>

              </div>

              <button className="btn btn-dark  text-white w-100 mt-2 fw-semibold shadow-sm">
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

          <div className="gifLogin">
            <img src="" alt="" />
            <img src={loginGif} alt="" width="450px" />
          </div>

        </div>

      </div>
    </>
  );
}
