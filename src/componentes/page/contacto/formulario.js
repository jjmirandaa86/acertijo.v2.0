import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Formulario = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Form.Group>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder={t("app.page.contactenos.formulario.nombre")}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder={t("app.page.contactenos.formulario.titulo")}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="email"
            placeholder={t("app.page.contactenos.formulario.correo")}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder={t("app.page.contactenos.formulario.mensaje")}
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          {t("app.page.contactenos.formulario.boton.enviar")}
        </Button>
      </Form.Group>
    </div>
  );
};

export default Formulario;
