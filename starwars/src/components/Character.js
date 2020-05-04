import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroupItem
} from 'reactstrap';

function Character({
  loading,
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender
}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ListGroupItem tag='button' action onClick={toggle}>
      {name}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
          <dl className='row'>
            <div className='col'>
              <dt>Height</dt>
              <dd>{height}</dd>
              <dt>Mass</dt>
              <dd>{mass}</dd>
              <dt>Hair Color</dt>
              <dd>{hair_color}</dd>
              <dt>Skin Color</dt>
              <dd>{skin_color}</dd>
            </div>
            <div className='col'>
              <dt>Eye Color</dt>
              <dd>{eye_color}</dd>
              <dt>Birth Year</dt>
              <dd>{birth_year}</dd>
              <dt>Gender</dt>
              <dd>{gender}</dd>
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
  );
}

export default Character;
