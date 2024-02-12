/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "./config/ProtectedRoute.jsx";
import { ContainerHome } from "./App";
import RoutesLogin from "./login";
import { VerifyToken } from "./config/VerifyToken.jsx";
import { useCallback, useEffect, useReducer } from "react";
import { Permissions } from "./config/index.d.jsx";
import { LoadingComponent } from "../components/Loading.component.jsx";
import { NotFound } from "./Views/404.routes.jsx";

const reducer = (state, action) => {
  switch (action.type) {
    case Permissions.ADMIN:
      return Permissions.ADMIN;
    case Permissions.USER:
      return Permissions.USER;
    case Permissions.INACTIVE:
      return Permissions.INACTIVE;
    default:
      return state;
  }
};

function RoutePages() {
  const navigate = useNavigate();
  const [user, dispatch] = useReducer(reducer, Permissions.INACTIVE);
  const verifyTokenCallback = useCallback(() => {
    VerifyToken(dispatch, navigate);
  }, [dispatch]);

  useEffect(() => {
    verifyTokenCallback();
  }, [verifyTokenCallback]);
  console.log("render");

  return user === Permissions.INACTIVE ? (
    <LoadingComponent />
  ) : (
    <Routes>
      {user === Permissions.USER && (
        <Route
          path="/authenticate/*"
          element={
            <ProtectedRoute
              isAllowed={user === Permissions.USER}
              redirectTo="/"
            >
              <RoutesLogin />
            </ProtectedRoute>
          }
        />
      )}
      {user === Permissions.ADMIN && (
        <Route
          path="/*"
          element={
            <ProtectedRoute isAllowed={user === Permissions.ADMIN}>
              <ContainerHome />
            </ProtectedRoute>
          }
        />
      )}
    </Routes>
  );
}
export default RoutePages;
