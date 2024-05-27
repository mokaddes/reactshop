import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import icon form react-icons
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () =>{
    return (
        <header>
            <Navbar bg="light" variant="light" expand="md" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand >
                        <img src="/mh.png" alt="React Shop" width="30" height="30" className="d-inline-block align-top" />
                        React Shop
                    </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto"> 
                        <LinkContainer to="/cart">
                            <Nav.Link >
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link >
                                <FaUser /> Sign In
                            </Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );

}

export default Header;

