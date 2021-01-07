import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./educacion.css";

const Educacion = () => {
  const { t } = useTranslation();

  return (
    <div class="container">
      <h4>{t("app.info.personal.educacion.titulo")}</h4>
      <div class="row">
        <div class="col-md-12">
          <div class="main-timeline7">
            <div class="timeline">
              <div class="timeline-icon">
                <i class="fa fa-globe"></i>
              </div>
              <span class="year">
                {t("app.info.personal.educacion1.nivel")}
              </span>
              <div class="timeline-content">
                <h5 class="title">
                  {t("app.info.personal.educacion1.nombre")} {" - "}{" "}
                  {t("app.info.personal.educacion1.ano")}
                </h5>
                <p class="description">
                  {t("app.info.personal.educacion1.descripcion")}
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="timeline-icon">
                <i class="fa fa-globe"></i>
              </div>
              <span class="year">
                {t("app.info.personal.educacion2.nivel")}
              </span>
              <div class="timeline-content">
                <h5 class="title">
                  {t("app.info.personal.educacion2.nombre")} {" - "}{" "}
                  {t("app.info.personal.educacion2.ano")}
                </h5>
                <p class="description">
                  {t("app.info.personal.educacion2.descripcion")}
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="timeline-icon">
                <i class="fa fa-globe"></i>
              </div>
              <span class="year">
                {t("app.info.personal.educacion1.nivel")}
              </span>
              <div class="timeline-content">
                <h5 class="title">
                  {t("app.info.personal.educacion1.nombre")} {" - "}{" "}
                  {t("app.info.personal.educacion1.ano")}
                </h5>
                <p class="description">
                  {t("app.info.personal.educacion1.descripcion")}
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="timeline-icon">
                <i class="fa fa-globe"></i>
              </div>
              <span class="year">
                {t("app.info.personal.educacion1.nivel")}
              </span>
              <div class="timeline-content">
                <h5 class="title">
                  {t("app.info.personal.educacion1.nombre")} {" - "}{" "}
                  {t("app.info.personal.educacion1.ano")}
                </h5>
                <p class="description">
                  {t("app.info.personal.educacion1.descripcion")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educacion;
