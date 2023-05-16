import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../component3/header/Header";
import Card from "../../component3/card/Card";
import { NavDropdown,Nav,Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "./Home.css"
import MovieList from "../../component3/movieList/MovieList";
const Home=()=>{
    
    return(
        <>
<Navbar className="nav" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
      </Container>
    </Navbar>

        <div className="poster">
        <MovieList />
        </div>
        </>
    )
}
export default Home;