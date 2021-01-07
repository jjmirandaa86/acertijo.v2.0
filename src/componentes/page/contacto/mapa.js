import React from "react";
import { useTranslation } from "react-i18next";

const Mapa = () => {
  const { t } = useTranslation();

  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.880855782816!2d-79.89596917465231!3d-2.0678322236167346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDQnMDMuOSJTIDc5wrA1Myc0NC4xIlc!5e0!3m2!1ses!2sec!4v1604258410559!5m2!1ses!2sec"
        width="100%"
        height="300"
        frameborder="0"
        allowfullscreen="true"
        aria-hidden="true"
        tabindex="0"
      ></iframe>
    </div>
  );
};

export default Mapa;
