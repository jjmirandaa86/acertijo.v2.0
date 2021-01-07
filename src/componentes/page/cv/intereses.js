import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./educacion.css";

import Ico_Futbol from "../../../recursos/img/svg/050-football ball.svg";
import Ico_Peliculas from "../../../recursos/img/svg/037-video.svg";
import Ico_Musica from "../../../recursos/img/svg/014-drum.svg";
import Ico_Gym from "../../../recursos/img/svg/024-dumbbell.svg";
import Ico_Viajes from "../../../recursos/img/svg/048-camping tent.svg";
import Ico_Bicicleta from "../../../recursos/img/svg/049-bicycle.svg";

const Intereses = () => {
  const { t } = useTranslation();

  return (
    <div class="container text-center">
      <Container>
        <Card>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <Row>
              <Col xs={6} md={4} lg={2}>
                <div class="bg-warning">
                  <br></br>
                  <Image src={Ico_Futbol} width="40" height="40" rounded />{" "}
                  <br></br>
                  Futbol
                  <br></br>
                  <br></br>
                </div>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <div class="">
                  <br></br>
                  <Image
                    src={Ico_Peliculas}
                    width="40"
                    height="40"
                    rounded
                  />{" "}
                  <br></br>
                  Peliculas
                  <br></br>
                  <br></br>
                </div>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <div class="bg-warning">
                  <br></br>
                  <Image src={Ico_Musica} width="40" height="40" rounded />{" "}
                  <br></br>
                  Musica
                  <br></br>
                  <br></br>
                </div>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <div class="">
                  <br></br>
                  <Image src={Ico_Gym} width="40" height="40" rounded />{" "}
                  <br></br>
                  Gym
                  <br></br>
                  <br></br>
                </div>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <div class="bg-warning">
                  <br></br>
                  <Image src={Ico_Viajes} width="40" height="40" rounded />{" "}
                  <br></br>
                  Viajes
                  <br></br>
                  <br></br>
                </div>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <div class="">
                  <br></br>
                  <Image
                    src={Ico_Bicicleta}
                    width="40"
                    height="40"
                    rounded
                  />{" "}
                  <br></br>
                  Bicicleta
                  <br></br>
                  <br></br>
                </div>
              </Col>
            </Row>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default Intereses;
