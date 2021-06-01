import React, { useState } from "react";
import Button from "./Button";
import logo from "../images/UrbanooLogo.svg";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [buttonName] = useState("Download");

  return (
    <Container fluid className="position-fixed w-100 bg-white zindex-1">
      <Row className="align-items-center justify-content-between px-2">
        <Col xs="auto" sm={6}>
          <Link to="/"><img src={logo} alt="Logo" width="81px"></img></Link>
        </Col>
        <Col xs="auto" sm={6} className="text-right">
          <Button name={buttonName} />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
