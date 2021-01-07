import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Resumen = () => {
  const { t } = useTranslation();

  return (
    <div class="container">
      <Card>
        <Card.Body>
          <Card.Text>
            <h6>{t("app.info.personal.descripcion")}</h6>
          </Card.Text>
          <Card.Text class="justify-content-center">
            <button type="button" class="btn btn-primary">
              Descargar Cv
            </button>{" "}
            <button type="button" class="btn btn-primary">
              Contactame
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Resumen;
