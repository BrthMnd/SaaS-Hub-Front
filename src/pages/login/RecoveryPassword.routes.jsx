import { useRef, useState } from "react";
import { ApiPost } from "../../hooks/useApi";
import { ValidationError } from "yup";
import { isAxiosError } from "axios";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

export function RecoveryPassword() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== "" && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      inputRefs[index - 1].current.focus();
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();

    const values = {
      code: code.join(""),
    };

    try {
      const res = await ApiPost("/verifyCode", values);
      if (isAxiosError(res)) {
        console.log("instance error ");
        setErr(res.response.data.message);
      } else {
        // cookie.remove("CodeVerify");
        cookie.set("userId", res.data.info.userId);
        navigate("/authenticate/AuthorizedForChangePassword");
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        setErr(error.message);
      } else {
        console.log(error);
        setErr("Error desconocido en login routes");
      }
    }

    return;
  };

  return (
    <>
      <form
        onSubmit={handleClick}
        className="login-container bg-gray d-flex justify-content-center align-items-center vh-100 "
      >
        <div
          className="login-content bg-white p-5 rounded-5 text-secondary"
          style={{ width: "25rem" }}
        >
          <h1>Codigo de Verificacion</h1>
          <div className="code-input">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="password"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(index, e)}
              />
            ))}
          </div>
          <div className="m-4 ">
            <h6>
              ¿No ha llegado el correo aún?
              <a type="button" href="#">
                Enviar de nuevo.
              </a>
            </h6>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <button className="btn btn-secondary">Verificar</button>
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
