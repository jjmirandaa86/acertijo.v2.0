import React from "react";
import { CardGroup, Card, ProgressBar, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./educacion.css";

const Habilidades = () => {
  const { t } = useTranslation();

  return (
    <div class="container">
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>{t("app.info.personal.habilidades1.tipo")}</Card.Title>
            <Card.Text>
              <Table>
                <tbody>
                  <tr>
                    <td>{t("app.info.personal.habilidades1.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades1.calificacion")}
                        label={
                          t("app.info.personal.habilidades1.calificacion") + "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{t("app.info.personal.habilidades2.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades2.calificacion")}
                        label={
                          t("app.info.personal.habilidades2.calificacion") + "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{t("app.info.personal.habilidades3.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades3.calificacion")}
                        label={
                          t("app.info.personal.habilidades3.calificacion") + "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{t("app.info.personal.habilidades4.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades4.calificacion")}
                        label={
                          t("app.info.personal.habilidades4.calificacion") + "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>{t("app.info.personal.habilidades10.tipo")}</Card.Title>
            <Card.Text>
              <Table>
                <tbody>
                  <tr>
                    <td>{t("app.info.personal.habilidades10.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades10.calificacion")}
                        label={
                          t("app.info.personal.habilidades10.calificacion") +
                          "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{t("app.info.personal.habilidades11.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades11.calificacion")}
                        label={
                          t("app.info.personal.habilidades11.calificacion") +
                          "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{t("app.info.personal.habilidades12.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades12.calificacion")}
                        label={
                          t("app.info.personal.habilidades12.calificacion") +
                          "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{t("app.info.personal.habilidades13.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades13.calificacion")}
                        label={
                          t("app.info.personal.habilidades13.calificacion") +
                          "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>{t("app.info.personal.habilidades20.tipo")}</Card.Title>
            <Card.Text>
              <Table>
                <tbody>
                  <tr>
                    <td>{t("app.info.personal.habilidades20.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades20.calificacion")}
                        label={
                          t("app.info.personal.habilidades20.calificacion") +
                          "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{t("app.info.personal.habilidades21.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades21.calificacion")}
                        label={
                          t("app.info.personal.habilidades21.calificacion") +
                          "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{t("app.info.personal.habilidades22.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades22.calificacion")}
                        label={
                          t("app.info.personal.habilidades22.calificacion") +
                          "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>{t("app.info.personal.habilidades23.nombre")}</td>
                    <td>
                      <ProgressBar
                        now={t("app.info.personal.habilidades23.calificacion")}
                        label={
                          t("app.info.personal.habilidades23.calificacion") +
                          "%"
                        }
                        variant="success"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Habilidades;
