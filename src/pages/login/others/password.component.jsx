import { useState } from "react";

export function InputPassword() {
  const [eyeIcon, setEyeIcon] = useState("fa-eye");
  const [eyeDisplay, setEyeDisplay] = useState("none");

  const ShowEye = () => {
    setEyeDisplay("block");
  };

  const hiddenEye = () => {
    setEyeDisplay("none");
  };

  const ChangeDisplay = () => {
    const passwd = document.getElementById("cont");
    const eye = document.getElementById("eye");

    if (eyeIcon === "fa-eye") {
      setEyeIcon("fa-eye-slash");
      passwd.type = "text";
    } else {
      setEyeIcon("fa-eye");
      passwd.type = "password";
    }

    eye.classList.toggle("visible");
    passwd.focus();
  };

  return (
    <>
      <input
        className="form-control bg-light cont"
        type="password"
        placeholder="Contraseña"
        name="password"
        id="cont"
        onBlur={hiddenEye}
        onFocus={ShowEye}
        
      />
      <span
        id="eye"
        style={{ display: eyeDisplay }}
        onMouseDown={(e) => e.preventDefault()}
        onClick={ChangeDisplay}
      >
        <i className={`far ${eyeIcon}`} id="eye1"></i>
      </span>
    </>
  );
}
