import React from "react";
import { Spinner } from "react-bootstrap";
import Logo from "../../recursos/img/logo-nombre-lema-blanco.png";
import { useTranslation } from "react-i18next";

const Cargando = () => {
  const { t } = useTranslation();

  return (
    <div class="row m-0 bg-dark justify-content-center align-items-center vh-100">
      <div class="col-sm-4">
        <h1 class="text-center" variant="dark">
          <img
            alt=""
            src={Logo}
            width="300"
            height="60"
            className="d-inline-block align-top"
          />{" "}
          <br></br>
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="warning" />
        </h1>
      </div>
    </div>
  );
};

export default Cargando;
