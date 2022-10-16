import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Новости
          </Nav.Link>
          <Nav.Link as={Link} to="/cosmetik">
            Косметика
          </Nav.Link>
          <Nav.Link as={Link} to="/Shop">
            Магазин
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Header };
