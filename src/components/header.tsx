import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Navbar from "react-bootstrap/esm/Navbar";

function AppHeader({ disabled }: { disabled?: boolean }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand>Dogma Meta</Navbar.Brand>
      {!disabled && (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-right">
              <Nav.Link href="#/">Home</Nav.Link>
              <Nav.Link href="#/network">Network</Nav.Link>
              <Nav.Link disabled href="#/storage">
                Storage
              </Nav.Link>
              <Nav.Link disabled href="#/mail">
                Mail
              </Nav.Link>
              <Nav.Link disabled href="#/me">
                User
              </Nav.Link>
              <NavDropdown title="App" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#/services">Services</NavDropdown.Item>
                <NavDropdown.Item disabled href="#/dht">
                  DHT
                </NavDropdown.Item>
                <NavDropdown.Item disabled href="/#test">
                  Another link
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/about">
                  About Dogma Meta
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
}

export default AppHeader;
