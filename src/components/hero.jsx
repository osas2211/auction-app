import React from 'react'
import { Button } from 'react-bootstrap'
import AddNFT from './addItemForm'
import "../styles/hero.css"

export default function Hero() {
  const [show, setShow] = React.useState(false)
  const handleShow = ()=> setShow(true)
  const handleClose = ()=> setShow(false)
  return (
    <React.Fragment>
        <div className="hero text-center d-flex align-items-center">
            <p className="welcome display-2 fw-bold">
                The Best Place to Buy and Sell NFTs
            </p>
            <div>
                <Button variant='dark' size='lg' className='me-3' onClick={handleShow}>Add NFTs</Button>
                <Button variant='primary' size='lg' className='text-light' href='#auctions'>Explore</Button>
            </div>
            <div className="bg"></div>
        </div>
        <AddNFT show={show} handleShow={handleShow} handleClose={handleClose}/>
    </React.Fragment>
  )
}
