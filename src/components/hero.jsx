import React from 'react'
import { Button } from 'react-bootstrap'
import "../styles/hero.css"

export default function Hero() {
  return (
    <React.Fragment>
        <div className="hero text-center d-flex align-items-center">
            <p className="welcome display-2 fw-bold">
                The Best Place to Buy and Sell
            </p>
            <div>
                <Button variant='dark' size='lg' className='me-3'>Add Items</Button>
                <Button variant='primary' size='lg' className='text-light' href='#auctions'>Explore</Button>
            </div>
            <div className="bg"></div>
        </div>
    </React.Fragment>
  )
}
