import React, { Suspense } from "react";
import Menu from "../../menu/menu";
import Imagen from "./imagen";
import Pie from "../../pie/pie";
import Cv from "../cv/cv";
import Contacto from "../contacto/contacto";

import { Spinner, Alert } from "react-bootstrap";

const Inicio = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <Menu />
        <Imagen />
        <Contacto />
        <Pie />
      </Suspense>
    </div>
  );
};

export default Inicio;
