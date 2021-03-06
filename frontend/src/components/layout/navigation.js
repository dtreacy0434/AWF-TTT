import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../images/logo.png";

// FILE : GameCard.js
// PROJECT : SENG3080 - Group Project
// PROGRAMMERS : 
// FIRST VERSION : 
// DESCRIPTION :
// This file contains the Navigation Component
// It sets up a navbar for the application

const Navigation = () => {
    return (
        <Navbar bg="light" fixed="top">
            <Container>
            <Navbar.Brand href="/"><img src={logo} alt="Logo"/> Tabletop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/games">Games</Nav.Link>
                    <Nav.Link href="/schedule">Schedule</Nav.Link>
                    <Nav.Link href="/people">People</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;