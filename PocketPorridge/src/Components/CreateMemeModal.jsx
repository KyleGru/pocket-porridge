import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ChooseMeme } from './ChooseMeme'
import './CreateMemeModal.css'
import React from 'react';

export function CreateMemeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          So You Think You're Funny, Eh?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='memeBtnFlex'>
      <ChooseMeme />
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function CreateMemeButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className='memeBtn' variant="dark" onClick={() => setModalShow(true)}>
        Create Meme
      </Button>

      <CreateMemeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}