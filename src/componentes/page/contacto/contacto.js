import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Formulario from "./formulario";
import Mapa from "./mapa";
const Contacto = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{t("app.page.contactenos.titulo")}</Navbar.Brand>
      </Navbar>
      <br></br>
      <Container bg="light" variant="">
        <Row>
          <Col sm={5}>
            <Formulario />
          </Col>
          <Col sm={7}>
            <Mapa />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
