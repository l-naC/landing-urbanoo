import illustration from "../images/UrbanooImageDownload.svg";
import apple from "../images/UrbanooApple.svg";
import google from "../images/UrbanooGoogle.svg";
import { Container, Col, Row } from "react-bootstrap";

function Download() {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center text-center py-5">
        <Col xs="auto" sm={6} className="p-0">
          <img src={illustration} alt="Illustration" className="w-100"></img>
        </Col>
        <Col xs="auto" sm={6} className="p-5">
          <h3 className="py-2">
            N’attendez pas plus longtemps <br/> et téléchargez Urbanoo !
          </h3>
          <img src={google} alt="Google" width="25%" className="me-3"></img>
          <img src={apple} alt="Apple" width="25%"></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Download;
