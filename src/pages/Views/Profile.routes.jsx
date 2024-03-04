import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image, Card, Nav } from "react-bootstrap";

export function ProfileRoutes() {
  const [user, setUser] = useState({
    name: "Nombre de Usuario",
    gender: "Género",
    // Agrega otros campos según sea necesario
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [activeTab, setActiveTab] = useState("#profile");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
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
    console.log("Funciona el guardar de profile")
    if (passwords.newPassword !== confirmPassword) {
      console.error("La nueva contraseña y la confirmación no coinciden");
      return;
    }

    const updatedProfileData = {
      ...user,
      passwords,
    };

    // Lógica para enviar la información actualizada al servidor

    setPasswords({
      currentPassword: "",
      newPassword: "",
    });
    setConfirmPassword("");
  };

  return (
    <div>
      <h1>Perfil</h1>
      <Container className="divPriProfile mx-auto card justify-content-center">
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
              <h4 className="text-center  mt-3">Example Last Name</h4>

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


          <Col md={8}>
            <Form>
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
                      <Form.Group controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" value={user.name} onChange={handleInputChange} />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" name="correo" value="example@g2.com" onChange={handleInputChange} />
                      </Form.Group>
                      <Form.Group controlId="formGender">
                        <Form.Label>Género</Form.Label>
                        <Form.Control as="select" name="gender" value={user.gender} onChange={handleInputChange}>
                          <option value="" disabled selected hidden>
                            Género
                          </option>
                          <option value="masculino">Masculino</option>
                          <option value="femenino">Femenino</option>
                          <option value="otro">Otro</option>
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
