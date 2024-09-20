import event1 from './images/event-1.jpg';
import event2 from './images/event-2.jpg';
import event3 from './images/event-2.jpg';
import pizza1 from './images/pizza1.jpg';
import pizza2 from './images/pizza2.jpg';
import pizza3 from './images/pizza3.jpg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>First</Col>
          <Col>Second</Col>
          <Col>
            <Button>Hello World</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
