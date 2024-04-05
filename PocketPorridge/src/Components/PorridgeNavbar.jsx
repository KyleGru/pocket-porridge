import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Logo } from './Logo'
import './PorridgeNavbar.css'

export function PorridgeNavbar() {

  return (
    <>
    <header>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container className="logoLeft navFlexAdjust">
          <Navbar.Brand href="#home">
            <Logo />
            </Navbar.Brand>
          <Nav className="navLinkFlex">
            <Nav.Link href="#home">Chat</Nav.Link>
            <Nav.Link href="#features">Search</Nav.Link>
            <Nav.Link href="#pricing">Create Meme</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
    </>
  )
}