import mockup from "../images/UrbanooMockup.svg";
import apple from "../images/UrbanooApple.svg";
import google from "../images/UrbanooGoogle.svg";
import { Container, Col, Row } from "react-bootstrap";

function Intro() {
  return (
    <Container fluid className="h-screen py-5">
      <Row className="h-100 align-items-center justify-content-around text-left">
        <Col sm={6}>
          <Col sm={10} className="m-auto">
            <h1 className="fw-bold">
              Découvrez une ville de manière différente !
            </h1>
            <p>Une application proposant des parcours ludique et didactique</p>
            <img src={google} alt="Google" width="30%" className="me-3"></img>
            <img src={apple} alt="Apple" width="30%"></img>
          </Col>
          
        </Col>
        <Col sm={4} md={6} className="text-center bg-fond py-4">
          <img src={mockup} alt="Mockup" className="mockup p-5"></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
