import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar className="navbar-custom" expand="lg">
        <Container>
          <img className="escudo" src={require('../img/escudo.png')} ></img>
          <Navbar.Brand className="text" href="#home"> BALLET UCRANIANO KHARKIV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text" href="#home">Home</Nav.Link>
              <Nav.Link className="text" href="#link">Nuestras presentaciones</Nav.Link>
              <Nav.Link className="text" href="#link">Proximas presentaciones</Nav.Link>
              <Nav.Link className="text" href="#link">Nosotros</Nav.Link>
              <Nav.Link className="text" href="#link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            );
}export default NavBar;