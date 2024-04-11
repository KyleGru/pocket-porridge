import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Logo } from './Logo'
import { CreateMemeButton, CreateMemeModal } from "./CreateMemeModal";
import './PorridgeNavbar.css'
import UserModal from "./UserModal";
import AuthService from '../utils/auth.js';


export default function PorridgeNavbar() {
const [showLoginModal, setShowLoginModal] = useState(false);
const [showSignupModal, setShowSignupModal] = useState(false);
const [user, setUser] = useState(null);
const handleSetUser = (value) => {
  console.log(value)
  setUser(value)
}
const handleLoginClick = () => {
  setShowLoginModal(false)

};
const handleLoginShow = () => setShowLoginModal(true);
const handleSignupClick = () => setShowSignupModal(false);
const handleSignupShow = () => setShowSignupModal(true);


return (
  <header>
    <Navbar bg="dark" variant="dark" className='navbar-gradient'>
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
          <CreateMemeButton />
        </Navbar.Brand>
        <Nav className="mr-auto">
         
        </Nav>
        <Nav className="ml-auto flex-column loginGap">
          {/* {user ? (
            <div className='user-info'>
              <span>{`${AuthService.getFirstName()} ${AuthService.getLastName()}`}</span>
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <>
          <Button variant="outline-light" className="mr-2" onClick={handleLoginShow}>Login</Button>
          <Button variant="light" onClick={handleSignupShow}>Signup</Button>
            </>
          )} */}
            <>
          <Button variant="outline-light" className="mr-2" onClick={handleLoginShow} >Login</Button>
          <Button variant="light" onClick={handleSignupShow}>Signup</Button>
            </>
        </Nav>
      </Container>
    </Navbar>

    {/* Login Modal */}
    <UserModal
      title="Login"
      show={showLoginModal}
      handleClose={handleLoginClick}
      handler={handleSetUser}
    />

    {/* Signup Modal */}
    <UserModal
      title="Signup"
      show={showSignupModal}
      handleClose={handleSignupClick}
      handler={handleSetUser}
    />
  </header>
)}

