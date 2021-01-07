import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../recursos/img/icono-logo.png";
const Pie = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>
        <h6 class="warning">{t("app.inicio.pie.texto1")}</h6>
        <h6>{t("app.inicio.pie.texto2")}</h6>
      </p>
    </div>
  );
};

export default Pie;
