import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col, ListGroup } from 'reactstrap';
import Character from './components/Character';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/people/`)
      .then(res => setData(res.data.results))
      .catch(console.log);
  }, []);

  return (
    <div className='App'>
      <Container className='d-flex justify-content-center'>
        <Col sm='12' md='6'>
          <h1 className='Header mb-3 mt-3'>Characters</h1>
          <ListGroup className='mb-4'>
            {data.map((el, i) => (
              <Character
                key={i}
                name={el.name}
                height={el.height}
                mass={el.mass}
                hair_color={el.hair_color}
                skin_color={el.skin_color}
                eye_color={el.eye_color}
                birth_year={el.birth_year}
                gender={el.gender}
              />
            ))}
          </ListGroup>
        </Col>
      </Container>
    </div>
  );
};

export default App;
