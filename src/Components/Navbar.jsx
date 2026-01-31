import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../Context/CartContext"
import { Container, Navbar, Nav, Form, Button, NavDropdown, InputGroup, FormControl } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaTruck } from "react-icons/fa";

function CustomNavbar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      
      <div style={{ backgroundColor: '#004d25', color: '#fff', textAlign: 'center', padding: '5px', fontSize: '14px' }}>
        Free shipping on orders above ₹599
      </div>

      
      <Navbar expand="lg" style={{ backgroundColor: '#3cb46e' }}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: '#fff', fontWeight: 'bold', fontSize: '40px' }}>
            PLIX
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: '#fff' }} />

          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex mx-auto" style={{ maxWidth: '400px', flexGrow: 1 }}>
              <InputGroup>
                <FormControl
                  type="search"
                  placeholder="Search for |"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="light">Search</Button>
              </InputGroup>
            </Form>

            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/" style={{ color: '#fff' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/AddProduct" style={{ color: '#fff' }}>Add Product</Nav.Link>
              <Nav.Link as={Link} to="/Cart" style={{ color: '#fff' }}>
       Cart🛒 ({cartCount})
    </Nav.Link>
              <Nav.Link style={{ color: '#fff' }}>
                <FaTruck />
              </Nav.Link>
              <Nav.Link as={Link} to="/SignUp" style={{ color: '#fff' }}>
             <FaUser />
                </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <div style={{ backgroundColor: '#b8f3c2', padding: '8px 0' }}>
        <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <span role="img" aria-label="box">🎁</span> Build Your Own Box
          <span>Shop By Concern</span>
          <span>Shop By Category</span>
          <span>Shop By Plant</span>
          <span>Plix Kids</span>
          <span role="img" aria-label="plant">🌱</span> Loyalty Membership
          <span role="img" aria-label="new">🎉</span> New Launches
          {/* <span role="img" aria-label="gift">💝</span> Gifting
          <span role="img" aria-label="all">💯</span> All Products */}
        </Container>
        <div style={{
        background: '#b8f3c2',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <Link to="/category/facewash" style={{color:"black", textDecoration:"none"}}>Facewash</Link>
        <Link to="/category/shampoos" style={{color:"black", textDecoration:"none"}}>Shampoos</Link>
        <Link to="/category/lotions" style={{color:"black", textDecoration:"none"}}>Lotions</Link>
        <Link to="/category/serums" style={{color:"black", textDecoration:"none"}}>Serums</Link>
      </div>
      </div>
    </>
  );
}

export default CustomNavbar;
