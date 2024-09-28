import event1 from './images/event-1.jpg';
import event2 from './images/event-2.jpg';
import event3 from './images/event-3.jpg';

import './App.css';

import { Container, Row } from 'react-bootstrap';
import CardComponent from './components/card';
import { useState } from 'react';
import HeaderComponent from './components/header';
import SlideComponent from './components/slide';

function App() {
  const cardItems = [
    { id: 1, image: event1, title: 'Card Title 1' },
    { id: 2, image: event2, title: 'Card Title 2' },
    { id: 3, image: event3, title: 'Card Title 3' },
  ];
  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState(cardItems);
  const onAddButtonClick = (id) => {
    console.log('ID ', id);
    setItemCount((prevState) => prevState + 1);
  };
  return (
    <div>
      <Container>
        <HeaderComponent itemCount={itemCount} />
        <SlideComponent />
        <Row className='mt-3'>
          {items.map((item) => (
            <CardComponent
              key={item.id}
              image={item.image}
              onAddButtonClick={onAddButtonClick.bind(null, item.id)}
              title={item.title}
              id={item.id}
            ></CardComponent>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
