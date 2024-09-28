import { Col, Card, Button } from 'react-bootstrap';
const CardComponent = ({ image, onAddButtonClick, title, id }) => {
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant='top' src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary' onClick={onAddButtonClick}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardComponent;
