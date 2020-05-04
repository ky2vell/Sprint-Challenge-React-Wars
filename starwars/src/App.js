import React, { useState, useEffect } from 'react';
import { Container, Col, ListGroup } from 'reactstrap';
import Character from './components/Character';
import Pages from './components/Pages';
import * as Utils from './utilities';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve, reject) => {
      Utils.getPeople(
        'https://swapi.py4e.com/api/people/',
        [],
        resolve,
        reject
      );
    }).then(res => {
      setPosts(res);
    });
    setLoading(false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='App'>
      <Container className='d-flex justify-content-center'>
        <Col sm='12' md='6'>
          <h1 className='Header mb-3 mt-3'>Characters</h1>
          <ListGroup className='mb-4'>
            {currentPosts.map((el, i) => (
              <Character
                loading={loading}
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
          <Pages
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </Col>
      </Container>
    </div>
  );
};

export default App;
