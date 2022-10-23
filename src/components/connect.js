import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../pages/About";
import Services from "../pages/Service";
import Home from "../pages/Home";
import "../styles/style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function NavBar() {
  return (
    <BrowserRouter>
      <Navbar expand="lg">
        <Container>
          <Navbar.Offcanvas href="">Harsh Raval</Navbar.Offcanvas>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="nav_text">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Services">Services</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route index element={<Home />} />
        <Route path="Services" element={<Services />} />
        <Route path="About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
