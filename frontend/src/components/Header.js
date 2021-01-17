import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Nav, NavDropdown, Navbar, Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container> 
          <LinkContainer to='/'>
          <Navbar.Brand>Working Comics</Navbar.Brand>
          </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <LinkContainer to="/login">
      <Nav.Link>Login</Nav.Link>
      </LinkContainer>
      
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header
