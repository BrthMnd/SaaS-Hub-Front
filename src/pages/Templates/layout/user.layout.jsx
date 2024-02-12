export function UserLayout() {
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
        <a href="#" className="d-block">
          Users
        </a>
      </div>
    </div>
  );
}
