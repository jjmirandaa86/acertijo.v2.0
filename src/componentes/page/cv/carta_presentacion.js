import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Ico_Correo from "../../../recursos/img/svg/038-email-2.svg";
import Ico_Sitio from "../../../recursos/img/svg/024-globe.svg";
import Ico_Skype from "../../../recursos/img/svg/023-contact.svg";
import Ico_Fono from "../../../recursos/img/svg/045-call.svg";
import Ico_Direccion from "../../../recursos/img/svg/047-location.svg";

import Ico_Facebook from "../../../recursos/img/svg/045-facebook.svg";
import Ico_Instagram from "../../../recursos/img/svg/034-instagram.svg";
import Ico_Google from "../../../recursos/img/svg/038-google-drive.svg";
import Ico_Linkedin from "../../../recursos/img/svg/031-linkedin.svg";

const Carta_presentacion = () => {
  const { t } = useTranslation();

  return (
    <div class="container">
      <Card>
        <Card.Body>
          <Card.Title>{t("app.info.personal.nombre")}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {t("app.info.personal.cargo")}
          </Card.Subtitle>
          <Card.Text>
            <div class="media">
              <img
                src={Ico_Correo}
                class="mr-3"
                alt="..."
                width="25"
                height="25"
              />
              <div class="media-body">{t("app.info.personal.email1")}</div>
            </div>
            <div class="media">
              <img
                src={Ico_Sitio}
                class="mr-3"
                alt="..."
                width="25"
                height="25"
              />
              <div class="media-body">
                <Card.Link href={t("app.info.personal.web")}>
                  {t("app.info.personal.web")}
                </Card.Link>
              </div>
            </div>
            <div class="media">
              <img
                src={Ico_Skype}
                class="mr-3"
                alt="..."
                width="25"
                height="25"
              />
              <div class="media-body">{t("app.info.personal.skype")}</div>
            </div>
            <div class="media">
              <img
                src={Ico_Fono}
                class="mr-3"
                alt="..."
                width="25"
                height="25"
              />
              <div class="media-body">{t("app.info.personal.fono")}</div>
            </div>
            <div class="media">
              <img
                src={Ico_Direccion}
                class="mr-3"
                alt="..."
                width="25"
                height="25"
              />
              <div class="media-body">
                <Card.Link href={t("app.info.personal.direccion.mapa")}>
                  {t("app.info.personal.direccion")}
                </Card.Link>
              </div>
            </div>
            <br></br>
            <div class="media">
              <Card.Link href={t("app.info.personal.facebook.link")}>
                <img
                  src={Ico_Facebook}
                  class="mr-3"
                  alt="..."
                  width="40"
                  height="40"
                />
              </Card.Link>
              <Card.Link href={t("app.info.personal.instagram.link")}>
                <img
                  src={Ico_Instagram}
                  class="mr-3"
                  alt="..."
                  width="40"
                  height="40"
                />
              </Card.Link>
              <Card.Link href={t("app.info.personal.google.link")}>
                <img
                  src={Ico_Google}
                  class="mr-3"
                  alt="..."
                  width="40"
                  height="40"
                />
              </Card.Link>
              <Card.Link href={t("app.info.personal.linkedin.link")}>
                <img
                  src={Ico_Linkedin}
                  class="mr-3"
                  alt="..."
                  width="40"
                  height="40"
                />
              </Card.Link>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Carta_presentacion;
