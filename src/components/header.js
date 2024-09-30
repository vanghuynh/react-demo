import {
  Container,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Badge,
  Button,
} from 'react-bootstrap';

const HeaderComponent = (props) => {
  return (
    <Row>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>Pizza House</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>About Us</Nav.Link>
              <Nav.Link href='#link'>Contact</Nav.Link>
            </Nav>
            <Button variant='primary' onClick={props.showModel}>
              Items: <Badge bg='secondary'>{props.itemCount}</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default HeaderComponent;
