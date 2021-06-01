/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Col, Row } from "react-bootstrap";
import ButtonL from "../Button";

const Slide = ({ content }) => (
  <Container>
    <Row className="h-100 align-items-center slider-responsive">
      <Col sm={6}>
        <Col sm={8} className="m-auto text-center">
          <h2>{content[1]}</h2>
          <p>
           {content[2]}
          </p>
          <ButtonL name="Download" />
        </Col>
      </Col>
      <Col sm={6}>
        <div className="bg-slides"
          css={css`
            height: 80vh;
            width: 100%;
            margin: auto;
            background-image: url("${content[0]}");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          `}
        />
      </Col>
    </Row>
  </Container>
);

export default Slide;
