import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function Product({img, title, current_bid, total_bid}) {
  return (
    <Card>
       <div className='product-img my-3 mx-auto'>
        <Card.Img variant='top' src={img} />
       </div>
        <Card.Body>
            <Card.Title className='text-capitalize'>{title}</Card.Title>
           <Card.Text>
           <div className="total_bids mt-4">
                <p>Total Bids: </p>
                <p className='fw-bold'>{total_bid}</p>
            </div>

            <div className="current_bid">
                <p>Current Bid:</p>
                <p className='fw-bold'>${current_bid}</p>
            </div>
            <div className="text-center my-3">
                <Button variant='primary' className='text-light text-capitalize fw-bold'>Place a Bid</Button>
            </div>
           </Card.Text>
        </Card.Body>
    </Card>
  )
}
