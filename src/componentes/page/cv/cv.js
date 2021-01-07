import React, { Suspense } from "react";
import Menu from "../../menu/menu";
import Pie from "../../pie/pie";

import Carta_presentacion from "./carta_presentacion";
import Resumen from "./resumen";
import Educacion from "./educacion";
import Habilidades from "./habilidades";
import Intereses from "./intereses";

const Cv = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <Menu />
        <br></br>
        <Carta_presentacion />
        <br></br>
        <Resumen />
        <br></br>
        <Educacion />
        <br></br>
        <Habilidades />
        <br></br>
        <Intereses />
        <br></br>
        <Pie />
      </Suspense>
    </div>
  );
};

export default Cv;
