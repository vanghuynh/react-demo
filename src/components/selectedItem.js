import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

const SelectedItemComponent = (props) => {
  return (
    <>
      <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {props.selectedItems.map((item) => (
              <Row key={item.id}>
                <Col>{item.title}</Col>
                <Col>{item.count}</Col>
                <Col>
                  <Button variant='primary'>+</Button>
                </Col>
                <Col>
                  <Button variant='danger'>-</Button>
                </Col>
              </Row>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SelectedItemComponent;
