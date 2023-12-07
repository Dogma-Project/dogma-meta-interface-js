import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Navbar from "react-bootstrap/esm/Navbar";

function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand>Dogma Meta (Headless)</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-right">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#/network">Network</Nav.Link>
          <Nav.Link href="#/services">Services</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppHeader;
