import { React, Suspense, Component, Hero, NavBar, Container } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Spinner, Alert } from "react-bootstrap";
import LanguageSelector from "./LanguageSelector";
import "./App.css";
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";

import Inicio from "./componentes/page/inicio/inicio";
import Cv from "./componentes/page/cv/cv";
import Proyecto from "./componentes/page/cv/cv";
import Concacto from "./componentes/page/contacto/contacto";

const App = () => {
  return (
    <div className="app s-pxy-2">
      <h1 className="s-center">Bienvenidos a Sendrix12</h1>
      <Router>
        <ul className="nav-container s-border s-main-center s-pl-0">
          <li className="nav-container--item s-mr-2">
            <Link to="/">Menu</Link>
          </li>

          <li className="nav-container--item s-mr-2">
            <Link to="/info">cv</Link>
          </li>

          <li className="nav-container--item">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/cv" component={Cv} />
          <Route exact path="/proyecto" component={Proyecto} />
          <Route exact path="/contacto" component={Concacto} />
          <Route component={Inicio} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
