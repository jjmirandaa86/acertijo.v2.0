import React from "react";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Imagen1 from "../../../recursos/img/img1.jpg";
import Imagen2 from "../../../recursos/img/img2.jpg";

const Imagen = () => {
  const { t } = useTranslation();

  return (
    <Carousel>
      <Carousel.Item interval={t("app.inicio.imagenes.secuencia")}>
        <img
          className="d-block w-100"
          src={Imagen1}
          alt={t("app.inicio.imagenes.ima1.alt")}
        />
        <Carousel.Caption>
          <h3>{t("app.inicio.imagenes.ima1.h3")}</h3>
          <p>{t("app.inicio.imagenes.ima1.p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={t("app.inicio.imagenes.secuencia")}>
        <img
          className="d-block w-100"
          src={Imagen2}
          alt={t("app.inicio.imagenes.ima2.alt")}
        />
        <Carousel.Caption>
          <h3>{t("app.inicio.imagenes.ima2.h3")}</h3>
          <p>{t("app.inicio.imagenes.ima2.p")}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Imagen;
