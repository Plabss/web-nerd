/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import './NavBar.css';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="md" className='navbar-dark fixed-top'>
      <Navbar.Brand>
        <h1 className="text-white display-3">P<span>.</span></h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#hero">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link className="btn btn-send" href="https://drive.google.com/file/d/11h-API1vF-tX60HERoc9NYzWr2etnV0p/view?usp=sharing">Resume</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
