import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavouritesAction, removeFromFavouriteAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.content);
  const isJobInFavourites = favourites.some((job) => job._id === data._id);
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={5}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={4}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3} className="d-flex justify-content-around">
        {isJobInFavourites ? (
          <Button variant="danger" id="removebutton" onClick={() => dispatch(removeFromFavouriteAction(data._id))}>
            Remove from Favourites
          </Button>
        ) : (
          <Button color="primary" id="addbutton" onClick={() => dispatch(addToFavouritesAction(data))}>
            Add to Favourites
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
