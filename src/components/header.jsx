import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import AddNFT from './addItemForm'

export default function Header() {
  const [show, setShow] = React.useState(false)
  const handleShow = ()=> setShow(true)
  const handleClose = ()=> setShow(false)
  return (
    <div className='header'>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className='text-primary fw-bold'>AUCTION APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#auctions">Explore</Nav.Link>
                    <Nav.Link href="#" onClick={handleShow}>Add NFTs</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
          <AddNFT show={show} handleShow={handleShow} handleClose={handleClose}/>
    </div>
  )
}
