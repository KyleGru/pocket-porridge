import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Logo } from './Logo'
import { CreateMemeButton, CreateMemeModal } from "./CreateMemeModal";
import './PorridgeNavbar.css'

export function PorridgeNavbar() {
const [showLoginModal, setShowLoginModal] = useState(false);
const [showSignupModal, setShowSignupModal] = useState(false);

const handleLoginClick = () => setShowLoginModal(false);
const handleLoginShow = () => setShowLoginModal(true);
const handleSignupClick = () => setShowSignupModal(false);
const handleSignupShow = () => setShowSignupModal(true);


return (
  <header>
    <Navbar bg="dark" variant="dark" className='navbar-gradient'>
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Chat</Nav.Link>
          <Nav.Link href="#features">Search</Nav.Link>
          <CreateMemeButton />
        </Nav>
        <Nav className="ml-auto flex-column">
          <Button variant="outline-light" className="mr-2" onClick={handleLoginShow}>Login</Button>
          <Button variant="light" onClick={handleSignupShow}>Signup</Button>
        </Nav>
      </Container>
    </Navbar>

    <Modal show={showLoginModal} onHide={handleLoginClick}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>

    <Modal show={showSignupModal} onHide={handleSignupClick}>
      <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      </Modal>

  </header>
)
}