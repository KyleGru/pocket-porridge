import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CreateMemeModal.css'
import React from 'react';

export function TextInputModal(props) {
  return (
    <Modal
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          What Do You Want Your Meme To Say?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='memeBtnFlex'>
          <h3>Top Text</h3>
          <input type="text" />
          <h3>Bottom Text</h3>
          <input type="text" />
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}