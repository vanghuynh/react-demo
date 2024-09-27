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
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Carousel,
  Image,
  Card,
} from 'react-bootstrap';
import CardComponent from './components/card';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
              <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                  <Nav.Link href='#home'>Home</Nav.Link>
                  <Nav.Link href='#link'>Link</Nav.Link>
                  <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#action/3.1'>
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2'>
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.3'>
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action/3.4'>
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Image text='First slide' src={pizza1} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image text='First slide' src={pizza2} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image text='First slide' src={pizza3} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <CardComponent></CardComponent>
        </Row>
        <Row className='mt-3'>
          <Col>
            <Card>
              <Card.Img variant='top' src={event1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant='top' src={event1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant='top' src={event1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
