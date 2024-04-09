import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CreateMemeModal.css'
import React from 'react';
import { useState } from 'react'

export function TextInputModal(props) {
const [topText, setTopText] = useState('')
const [bottomText, setBottomText] = useState('')

const textSubmit = async (e) => {
  e.preventDefault();
  console.log('Top Text', topText)
  console.log('Bottom Text', bottomText)

  try {

const response = await fetch(`https://api.imgflip.com/caption_image?template_id=102156234&username=g_user_102490864058635787590&password=PocketPorridge&text0=${topText}&text1=${bottomText}`, {
  method: "POST"
} )

const data = await response.json()
console.log(data);

  } catch (error) {
    console.error("Error creating meme", error);
  }
}


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
          <input type="text" value={topText} onChange={(e) => setTopText(e.target.value)}/>
          <h3>Bottom Text</h3>
          <input type="text" value={bottomText} onChange={(e) => setBottomText(e.target.value)}/>
      </div>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onClose}>Close</Button>
        <Button onClick={textSubmit}>Generate</Button>
      </Modal.Footer>
    </Modal>
  );
}