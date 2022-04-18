import React from 'react'
import "../styles/auctions.css"
import { products } from '../dummy_products'
import Product from './product'

export default function Auctions() {
  const [productsState, ] = React.useState(products)

  return (
    <div className='auctions py-5' id='auctions'>
      <div className="auctions-head text-center text-capitalize">
        <small className='text-primary text-uppercase fw-bold'>Auctions</small>
        <h2>Current <span className='fw-bold'>Auctions</span></h2>
      </div>

      <div className="auctions-body">
        {
          productsState.map(product => {
            return <Product key={product.id} img={product.image} current_bid={product.current_bid} total_bid={product.total_bids} title={product.title}/>
          })
        }
      </div>
    </div>
  )
}
