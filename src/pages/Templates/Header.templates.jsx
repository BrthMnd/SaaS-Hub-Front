import cookie from "js-cookie";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

export function NavHeader() {
  const handleTheme = () => {
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
    }
  };
  return (
    <nav className="main-header navbar navbar-expand navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item ml-2">
          <a className="nav-link" data-widget="pushmenu" href="" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
      </ul>

      {/*<!-- Right navbar links -->*/}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
       
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">
              <div className="media">
                <img
                  src="dist/img/user1-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 mr-3 img-circle"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-right text-sm text-danger">
                      <i className="fas fa-star"></i>
                    </span>
                  </h3>
                  <p className="text-sm">Call me whenever you can...</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <div className="media">
                <img
                  src="dist/img/user8-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 img-circle mr-3"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    John Pierce
                    <span className="float-right text-sm text-muted">
                      <i className="fas fa-star"></i>
                    </span>
                  </h3>
                  <p className="text-sm">I got your message bro</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <div className="media">
                <img
                  src="dist/img/user3-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 img-circle mr-3"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Nora Silvester
                    <span className="float-right text-sm text-warning">
                      <i className="fas fa-star"></i>
                    </span>
                  </h3>
                  <p className="text-sm">The subject goes here</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">
              See All Messages
            </a>
          </div>
        </li>
        <a className="nav-link">
          <i className="mr-2"><FiShoppingCart /></i>
          <span className="badge badge-warning navbar-badge"></span>
        </a>
     
        <Logout />
      </ul>
    </nav>

  );
}
function Logout() {
  const handleTheme = () => {
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
    }
  };
  return (

  
    
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="">
        <i className="mr-1"><FiSettings /></i>
        <span className="badge badge-warning navbar-badge"></span>
      </a>

      
      <div className="dropdown-menu dropdown-menu dropdown-menu-right mr-3">

        <li className="nav-item">
      
        </li>

        <div className="">
  
            <a className="dropdown-item" role="button" onClick={handleTheme}>
              <i className="fas fa-moon mr-2"></i>
              Modo
            </a>
  
        </div>

        <div className="dropdown-divider"></div>

        <div className="">
          <a
          className="dropdown-item"
          data-widget="fullscreen"
          role="button"
          >
          <i className="fas fa-expand-arrows-alt mr-2"></i>
          Pantalla
          </a>
        </div>

        <div className="dropdown-divider"></div>

        <Link to={"/profile"} className="dropdown-item">
          <i className="fas fa-user mr-2"></i>
            Perfil
        </Link>
        <div className="dropdown-divider"></div>
        <a
          type="button"
          onClick={() => {
            cookie.remove("token");
            window.location.reload();
            localStorage.clear()
            console.log("Sesion cerrdad",localStorage.clear())
          }}
          className="dropdown-item"
          title="Cierra sesión"
        >
          <i className="fas fa-sign-out-alt mr-2"></i> Cerrar sesión
          <span className="float-right text-muted text-sm"></span>
        </a>
      </div>
    </li>
  );
}
