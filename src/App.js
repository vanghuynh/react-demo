import event1 from './images/event-1.jpg';
import event2 from './images/event-2.jpg';
import event3 from './images/event-3.jpg';

import './App.css';

import { Container, Row } from 'react-bootstrap';
import CardComponent from './components/card';
import { useState } from 'react';
import HeaderComponent from './components/header';
import SlideComponent from './components/slide';
import SelectedItemComponent from './components/selectedItem';

function App() {
  const cardItems = [
    { id: 1, image: event1, title: 'Card Title 1' },
    { id: 2, image: event2, title: 'Card Title 2' },
    { id: 3, image: event3, title: 'Card Title 3' },
  ];
  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState(cardItems);

  const [modalShow, setModalShow] = useState(false);

  const selectedItems = [
    { id: 1, title: 'Card Title 1', count: 2 },
    { id: 2, title: 'Card Title 2', count: 3 },
  ];

  const onAddButtonClick = (id) => {
    console.log('ID ', id);
    setItemCount((prevState) => prevState + 1);
  };
  return (
    <div>
      <Container>
        <SelectedItemComponent
          show={modalShow}
          onHide={() => setModalShow(false)}
          selectedItems={selectedItems}
        />
        <HeaderComponent
          itemCount={itemCount}
          showModel={() => setModalShow(true)}
        />
        <SlideComponent />
        <Row className='mt-3'>
          {items.map((item) => (
            <CardComponent
              key={item.id}
              image={item.image}
              // onAddButtonClick={onAddButtonClick.bind(null, item.id)}
              onAddButtonClick={() => onAddButtonClick(item.id)}
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
