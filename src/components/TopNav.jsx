import React from 'react'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "./../assets/images/siemens-logo.svg";
import logoColor from "./../assets/images/Siemens_color_logo.png";

const TopNav = () => {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="pt-4 pb-4" id="mainNav">
          <Container fluid>
            <div className='row'>
              <div className='col-12 mb-3'>
                <Navbar.Brand href="#" className='text-white fs-5'>
                  <img src={logo} width={130} />
                </Navbar.Brand>
              </div>
              <div className='col-12'>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logoColor} width={130} />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Digital Industries Software</Nav.Link>
                    <Nav.Link href="#action2">Software & products</Nav.Link>
                    <Nav.Link href="#action3">Solutions & services</Nav.Link>
                    <Nav.Link href="#action4">Industries</Nav.Link>
                    <Nav.Link href="#action5" className='p-0'>Training & support</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              </div>
            </div>
            
           
          </Container>
        </Navbar>
      ))}

      <Navbar className='secondNevBar' data-bs-theme="light" sticky="top">
        <Container className='justify-content-between'>
          <Navbar.Brand href="#home" className='fs-6 fw-bold dnone'>Realize LIVE India</Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavDropdown title="Attend" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Agenda</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pricing and packages</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Travel and hotel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Explore" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Sessions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Technical tracks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Training and certification</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Solutions center</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Innovation hub</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Techcellence awards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">On-demand content</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sponsor" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Become a sponsor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Meet our sponsors</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action4" className='btn_BoldGreen pt-2 pb-2'>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  )
}

export default TopNav
