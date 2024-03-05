import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Image, Card, Nav } from "react-bootstrap";
import { ApiGetOne, ApiUpdate } from "../../hooks/useApi";
import { DATA_URL_USER } from "../../assets/DATA_URL";
import toast, { Toaster } from "react-hot-toast";

export function ProfileRoutes() {

  const [userData, setUserData] = useState(null);
  const [validated, setValidated] = useState(false);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataType = localStorage.getItem("userData")
        const userIDParse = JSON.parse(userDataType)

        console.log(userIDParse)
        const userID = userIDParse.idusuario
        console.log("ID de usuario recuperado:", userID); // Verifica que el ID de usuario se recupera correctamente
        if (userID) {
          console.log(userID)
          const userDataResponse = await ApiGetOne(DATA_URL_USER, userID); // Utiliza el ID de usuario recuperado para obtener los datos del usuario
          console.log("EL perfil recuperado es: ", userDataResponse);
          setUserData(userDataResponse.data);
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []);


  const [user, setUser] = useState({
    nombre: "",
    genero: "Masculino",

    // Agrega otros campos según sea necesario
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [activeTab, setActiveTab] = useState("#profile");

  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    console.log(value)
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,

    }));
  };

  const handleImageChange = (e) => {
    console.log(e)
    // Implementa lógica para cambiar la foto de perfil
  };

  const handleCurrentPasswordChange = (e) => {
    const { value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      currentPassword: value,
    }));
  };

  const handleNewPasswordChange = (e) => {
    const { value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      newPassword: value,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };

  const updateProfile = () => {
    if (passwords.newPassword !== confirmPassword) {
      console.error("La nueva contraseña y la confirmación no coinciden");
      return;
    }

    const updatedProfileData = {
      ...user,

    };
    toast.success("Actualizado exitosamente");
    console.log(updatedProfileData)
    setUserData(updatedProfileData)
    const userDataType = localStorage.getItem("userData")
    const userIDParse = JSON.parse(userDataType)
    const userID = userIDParse.idusuario
    ApiUpdate(DATA_URL_USER, userID, updatedProfileData)

    // Lógica para enviar la información actualizada al servidor

    setPasswords({
      currentPassword: "",
      newPassword: "",
    });
    setConfirmPassword("");
  };


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (

    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <h1>Perfil</h1>
      <Container className="divPriProfile mx-auto">
        <Row>
          <Col md={4}>
            <div className="text-center">
              <Image
                src="https://4.bp.blogspot.com/-3V_CsZE7jeI/Wb5zfSflPSI/AAAAAAAAATc/3AaCybbrTF4eFou8fXoKWcCYWdixUMQMwCLcBGAs/s1600/profil.png"
                alt="Foto de perfil"
                roundedCircle
                fluid
                width="85%"
                height="85%"
                className="mx-auto"
              />
            </div>
            <Form.Group>
              <h4 className="text-center  mt-3">{userData ? userData.nombre : ""}</h4>
              <h4 className="text-center  mt-3"><strong>{userData && userData.correo }</strong></h4>




              <Form.Label>Cambiar foto de perfil</Form.Label>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  onChange={handleImageChange}
                  accept="image/*"
                />
                <label className="custom-file-label">Seleccionar archivo</label>
              </div>
            </Form.Group>
          </Col>


          <Col md={{ span: 7, offset: 1 }}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
              <Card>
                <Card.Header>
                  <Nav variant="pills" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
                    <Nav.Item>
                      <Nav.Link
                        href="#profile"
                        eventKey="#profile"
                        className={`nav-link ${activeTab === "#profile" ? "active bg-dark text-white" : ""}`}
                        onClick={() => setActiveTab("#profile")}
                      >
                        Perfil
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        href="#password"
                        eventKey="#password"
                        className={`nav-link ${activeTab === "#password" ? "active bg-dark text-white" : ""}`}
                        onClick={() => setActiveTab("#password")}
                      >
                        Cambiar Contraseña
                      </Nav.Link>
                    </Nav.Item>

                  </Nav>
                </Card.Header>
                <Card.Body>
                  {activeTab === "#profile" && (
                    <>
                      <Form.Group controlId="validationCustom01" >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="nombre"
                          autoFocus={true}
                          value={user.nombre}
                          onChange={handleInputChange}
                          defaultValue={userData ? userData.nombre : ""}
                          min={2}
                        />
                        <Form.Control.Feedback type="invalid" >
                        Ingresa el Nombre
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formGender">
                        <Form.Label>Género</Form.Label>
                        <Form.Control
                          as="select"
                          name="genero"
                          value={user.genero}
                          onChange={handleInputChange}
                        >
                          <option value="Masculino">Masculino</option>
                          <option value="Femenino">Femenino</option>
                          <option value="Otro">Otro</option>
                        </Form.Control>
                      </Form.Group>

                    </>
                  )}
                  {activeTab === "#password" && (
                    <>
                      <Form.Group controlId="formCurrentPassword">
                        <Form.Label>Contraseña actual</Form.Label>
                        <Form.Control
                          type="password"
                          name="currentPassword"
                          value={passwords.currentPassword}
                          onChange={handleCurrentPasswordChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="formNewPassword">
                        <Form.Label>Nueva contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          name="newPassword"
                          value={passwords.newPassword}
                          onChange={handleNewPasswordChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                        />
                      </Form.Group>
                    </>
                  )}
                  <Button
                    
                    className="btn btn-dark text-white w-100 mt-2 fw-semibold shadow-sm"
                    onClick={updateProfile}
                    disabled={!user.nombre} // Deshabilita el botón si el campo de nombre está vacío

                  >
                    Guardar
                  </Button>
                </Card.Body>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
