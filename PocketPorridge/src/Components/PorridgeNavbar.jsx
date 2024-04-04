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
        <Container className="logoLeft">
          <Navbar.Brand href="#home">
            <Logo />
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
    </>
  )
}