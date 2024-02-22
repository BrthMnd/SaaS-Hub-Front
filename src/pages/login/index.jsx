import { Route, Routes } from "react-router-dom";
import { Login } from "./login.routes";
import { Register } from "./register.routes";
import { RecoveryPassword } from "./RecoveryPassword.routes";
import { SendCode } from "./SendCode.routes";
import { ChangePassword } from "./ChangePassword.routes";
import { VerifyEmail } from "./FormRegister.routes";

function RoutesLogin() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recovery" element={<SendCode />} />
      <Route path="/verifyCode" element={<RecoveryPassword />} />
      <Route path="/AuthorizedForChangePassword" element={<ChangePassword />} />
      <Route path="/VerifyEmail/:token" element={<VerifyEmail />} />
    </Routes>
  );
}

export default RoutesLogin;
