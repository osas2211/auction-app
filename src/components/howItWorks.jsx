import React from 'react'
import "../styles/howitWorks.css"
import { faMoneyCheckDollar, faFunnelDollar, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Description() {
  return (
    <div className='descr'>
        <div className="descr_head container mb-5">
            <small className='text-primary text-uppercase fw-bold'>How?</small>
            <p className='display-6 text-capitalize'>how <span className='fw-bold'>it works</span></p>
        </div>
        <div className="descr_body">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-10 p-4">
                        <div className='icon text-primary'>
                            <FontAwesomeIcon icon={faMoneyCheckDollar}/>
                        </div>
                        <p className='h4'>Buy or Bid</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequatur quaerat magnam sequi nobis ut et iure.</p>
                    </div>
                    <div className="col-md-4 col-10 p-4">
                        <div className='icon text-primary'>
                            <FontAwesomeIcon icon={faFunnelDollar}/>
                        </div>
                        <p className='h4'>Submit a Bid</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequatur quaerat magnam sequi nobis ut et iure.</p>
                    </div>
                    <div className="col-md-4 col-10 p-4">
                        <div className='icon text-primary'>
                            <FontAwesomeIcon icon={faTrophy}/>
                        </div>
                        <p className='h4'>Win</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequatur quaerat magnam sequi nobis ut et iure.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
