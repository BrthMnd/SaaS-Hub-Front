import { Link, NavLink } from "react-router-dom";
import { UserLayout } from "./layout/user.layout";

export function AsideBar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary bg-dark elevation-4">
      <a
        href="index.html"
        className="brand-link"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>S</h1>
        <span className="brand-text font-weight-light">ip</span>
      </a>

      <section className="sidebar">
        <UserLayout />

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                <i className="fas fa-home nav-icon"></i>
                <p>Inicio</p>
              </Link>
            </li>
            <li className="nav-item menu-open">
              <NavLink className="nav-link ">
                <i className="nav-icon fas fa-users"></i>
                <p>
                  Usuarios
                  <i className="right fas fa-angle-left"></i>
                </p>
              </NavLink>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Usuario</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Roles</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Permisos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/pruebas"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Pruebas</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
}
