import React from "react";
import { Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Navbar bg="warning" variant="" className="d-flex justify-content-end">
      <div onChange={changeLanguage}>
        <select name="language" id="idioma">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </Navbar>
  );
};

export default LanguageSelector;
