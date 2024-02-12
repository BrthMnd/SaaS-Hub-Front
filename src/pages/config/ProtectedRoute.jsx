/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

export function ProtectedRoute({
  children,
  isAllowed,
  redirectTo = "/authenticate/login",
}) {
  console.log("Verify authenticate...");
  if (!isAllowed) {
    console.log("redirect...");
    window.location.href = redirectTo;
  }
  return children ? children : <Outlet />;
}
