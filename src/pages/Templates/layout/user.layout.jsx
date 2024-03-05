import { useEffect, useState } from "react";
import { ApiGetOne } from "../../../hooks/useApi";
import { DATA_URL_USER } from "../../../assets/DATA_URL";

export function UserLayout() {
  const [userData, setUserData] = useState(null);

  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userData")
        const userParseado=JSON.parse(userId)
        const UserID=userParseado.idusuario
        console.log("ID de usuario recuperado:", UserID); // Verifica que el ID de usuario se recupera correctamente
      if (UserID) {
          console.log(UserID)
          const userDataResponse = await ApiGetOne(DATA_URL_USER, UserID); // Utiliza el ID de usuario recuperado para obtener los datos del usuario
          console.log("EL perfil recuperado es: ", userDataResponse);
          setUserData(userDataResponse.data);
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []);

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
        {userData ? (
          <a href="/perfil" className="d-block">
            <strong>{userData.nombre}</strong> {/* Accede al nombre del usuario */}
            <br/>
            <strong>{userData.correo}</strong> {/* Accede al correo del usuario */}
            
          </a>
        ) : (
          <p>No hay datos de usuario disponibles</p>
        )}
      </div>
    </div>
  );
}
