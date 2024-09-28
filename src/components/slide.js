import { Carousel, Image, Row } from 'react-bootstrap';
import pizza1 from '../images/pizza1.jpg';
import pizza2 from '../images/pizza2.jpg';
import pizza3 from '../images/pizza3.jpg';

const SlideComponent = (props) => {
  return (
    <Row>
      <Carousel>
        <Carousel.Item>
          <Image text='First slide' src={pizza1} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
};

export default SlideComponent;
