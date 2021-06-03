import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";

function Footer() {
  return (
    <Container fluid className="footer text-white">
      <Row>
        <Col className="bg-footer">
          <ul className="d-flex justify-content-center list-unstyled mb-5 flex-column flex-sm-column flex-md-row flex-lg-row text-center">
            <li className="me-3">
              <Link to="/mentions" className="text-white text-decoration-none">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/politic" className="text-white text-decoration-none">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-column align-items-center">
            <p>Suivez-nous :</p>
            <div>
              <a href="https://www.facebook.com/UrbanooApp">
                <img src={facebook} alt="facebook" className="img-rs mx-2" />
              </a>
              <a href="https://twitter.com/Urbanoo9">
                <img src={twitter} alt="twitter" className="img-rs mx-2" />
              </a>
            </div>
          </div>
          <p className="text-center my-2 h-auto md:h-8 lg:h-8">
            © 2021 par Urbanoo
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
