import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroupItem
} from 'reactstrap';

function Character({ posts, loading }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts.map(post => (
        <ListGroupItem tag='button' action onClick={toggle}>
          {post.name}
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{post.name}</ModalHeader>
            <ModalBody>
              <dl className='row'>
                <div className='col'>
                  <dt>Height</dt>
                  <dd>{post.height}</dd>
                  <dt>Mass</dt>
                  <dd>{post.mass}</dd>
                  <dt>Hair Color</dt>
                  <dd>{post.hair_color}</dd>
                  <dt>Skin Color</dt>
                  <dd>{post.skin_color}</dd>
                </div>
                <div className='col'>
                  <dt>Eye Color</dt>
                  <dd>{post.eye_color}</dd>
                  <dt>Birth Year</dt>
                  <dd>{post.birth_year}</dd>
                  <dt>Gender</dt>
                  <dd>{post.gender}</dd>
                </div>
              </dl>
            </ModalBody>
            <ModalFooter>
              <Button className='btn btn-default' onClick={toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </ListGroupItem>
      ))}
    </>
  );
}

export default Character;
