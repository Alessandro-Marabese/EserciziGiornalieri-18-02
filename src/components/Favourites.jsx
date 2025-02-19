import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Job from "./Job";

const Favourites = () => {
  const favourite = useSelector((state) => state.favourites.content);
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favourites</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {favourite.length > 0 ? favourite.map((jobData) => <Job key={jobData._id} data={jobData} />) : <Alert variant="warning">Non ci sono preferiti</Alert>}
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
