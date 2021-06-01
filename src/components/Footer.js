import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container fluid className="footer text-white">
      <Row>
        <Col className="bg-footer">
          <ul class="d-flex justify-content-center list-unstyled mb-5">
            <li className="px-2">
              <Link to="/mentions" className="text-white text-decoration-none">Mentions légales</Link>
            </li>
            <li>
              <Link to="/politic" className="text-white text-decoration-none">Politique de confidentialité</Link>
            </li>
          </ul>
          <p class="text-center my-2 h-auto md:h-8 lg:h-8">
            © 2021 par Urbanoo
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
