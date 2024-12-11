import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './AdNav.css';

function AdminNav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeBackground);

      return () => {
        window.removeEventListener('scroll', changeBackground);
      };
    }
  }, []);

  return (
    <Navbar expand="lg" className={`${navbar ? 'active fixed-top shadow-lg slide-in-blurred-top' : 'Navbar fixed-top'}`}>
      <Container>
        <Navbar.Brand href="#" className="text-white">
          <img className="logo" src="https://www.tribesindia.com/wp-content/uploads/2020/07/logo_sweta.png" alt="Logo" />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto m-auto my-2 my-lg-0 NavBarLinks" navbarScroll>
           
              <Link style={{ textDecoration: 'none' }} to="/admin/dashboard" className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>
                <i className="fa-solid fa-house"></i>Dashboard
              </Link>
            
            
              <Link style={{ textDecoration: 'none' }} to="/admin/products" className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>
                <i className="fa-solid fa-box"></i>Products
              </Link>
            
            
              <Link style={{ textDecoration: 'none' }} to="/admin/orders" className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>
                <i className="fa-solid fa-shopping-cart"></i>Orders
              
            </Link>
            
              <Link style={{ textDecoration: 'none' }} to="/admin/users" className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>
                <i className="fa-solid fa-users"></i>Users
              
            </Link>
            
              <Link style={{ textDecoration: 'none' }} to="/admin/reports" className={`${navbar ? 'navLinkScroll fade-in' : 'navLink fade-in'}`}>
                <i className="fa-solid fa-chart-line"></i>Reports
              
            </Link>
          </Nav>
          <button className="nav-btn">Logout</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNav;
