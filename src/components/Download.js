import illustration from "../images/UrbanooImageDownload.svg";
import apple from "../images/UrbanooApple.svg";
import google from "../images/UrbanooGoogle.svg";
import { Container, Col, Row } from "react-bootstrap";

function Download() {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center text-center">
        <Col xs="auto" sm={6} className="p-0">
          <img src={illustration} alt="Illustration" className="w-100"></img>
        </Col>
        <Col xs="auto" sm={6}>
          <p className="fs-4 fw-bold">
            N’attendez pas plus longtemps et téléchargez Urbanoo !
          </p>
          <img src={google} alt="Google" width="30%" className="me-3"></img>
          <img src={apple} alt="Apple" width="30%"></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Download;
