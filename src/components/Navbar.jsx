import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function AppNavbar() {
  return (
    <Navbar
      rootCloseEvent="click"
      bg="light"
      expand="md"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="https://placehold.co/40x40"
            alt="Logo"
            className="me-2 rounded-circle"
          />
          MySite
        </Navbar.Brand>
        <Navbar.Collapse rootCloseEvent="click" id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              בית
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              האומנויות
            </Nav.Link>
            <Nav.Link as={NavLink} to="/teacher">
              המורה
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              צור קשר
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
