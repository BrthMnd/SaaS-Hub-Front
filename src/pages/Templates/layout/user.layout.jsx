import { useAuthUserContext } from "../../../context/user/user.provider";

export function UserLayout() {
  const { state } = useAuthUserContext();

  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div
        className="image"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <i
          className="fas fa-user-circle"
          style={{
            color: "white",
            fontSize: "30px",
          }}
        ></i>
      </div>
      <div className="info">
        {state ? (
          <a href="/perfil" className="d-block">
            <strong>{state.user.name}</strong>
            <br />
          </a>
        ) : (
          <p>No hay datos de usuario disponibles</p>
        )}
      </div>
    </div>
  );
}
