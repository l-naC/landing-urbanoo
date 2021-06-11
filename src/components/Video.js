import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ButtonL from "./Button";

function Video() {
  return (
    <Container fluid className="h-screen teaser pt-5">
      <Row className="h-100 align-items-center text-center">
        <Col sm={10} className="m-auto">
          <h2 className="text-white">
            Découvrez le teaser de notre application
          </h2>
          <ButtonL
            name="Teaser"
            url="https://drive.google.com/file/d/1drTGNbDq3z-mXVc_WPBYfCDFr-w2RS8N/view?usp=sharing"
            rel="noreferrer"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Video;
