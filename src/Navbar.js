import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>
            <Navbar className="NavBar" expand="lg">
                <Container>
                    <Navbar.Brand href="/">L.I.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/locations">Search Locations</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;