import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Logo } from './Logo'
import { CreateMemeButton, CreateMemeModal } from "./CreateMemeModal";
import './PorridgeNavbar.css'
import UserModal from "./UserModal";

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

    {/* Login Modal */}
    <UserModal
      title="Login"
      show={showLoginModal}
      handleClose={handleLoginClick}
    />

    {/* Signup Modal */}
    <UserModal
      title="Signup"
      show={showSignupModal}
      handleClose={handleSignupClick}
    />
  </header>
)
}