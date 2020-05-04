import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col, ListGroup } from 'reactstrap';
import Character from './components/Character';
import Pages from './components/Pages';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://swapi.py4e.com/api/people/');
      setPosts(res.data.results);
      setLoading(false);
    };

    fetchPosts();
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
            <Character posts={currentPosts} loading={loading} />
          </ListGroup>
          <Pages
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
