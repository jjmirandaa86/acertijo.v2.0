import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Logo from "../../recursos/img/logo-nombre.png";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Navbar bg="warning" variant="light" expand="lg">
        <Navbar.Brand href={t("app.init.barra.inicio.link")}>
          <img
            alt=""
            src={Logo}
            width="220"
            height="40"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={t("app.init.barra.inicio.link")}>
              <h5>{t("app.init.barra.inicio")}</h5>
            </Nav.Link>
            <Nav.Link href={t("app.init.barra.cv.link")}>
              <h5>{t("app.init.barra.cv")}</h5>
            </Nav.Link>
            <Nav.Link href={t("app.init.barra.proyecto.link")}>
              <h5>{t("app.init.barra.proyecto")}</h5>
            </Nav.Link>
            <Nav.Link href={t("app.init.barra.contacto.link")}>
              <h5>{t("app.init.barra.contacto")}</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Menu;
