import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import './Navbar.css';
import { Component } from 'react';
import NavLink from 'react-bootstrap/esm/NavLink';
import Container from 'react-bootstrap/esm/Container';

const PrimerComponente = (props) => {

  const items = props.items?.map(item =>

    <NavLink href={'item.url'}>
      {item.label}
    </NavLink>

  );

  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Start bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ml-auto' >
          {items}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default PrimerComponente;