import React from 'react'
import './pricing.css'
import { extendedFeatures,regularFeatures } from '../../data/pricingData' 

import PricingCards from '../PricingCards'

const Pricing = () => {
  return (
    <div className='pricingMain '>
      <div className='pricingText text-center'>
        <p>Pricing</p>
        <h2>Flexible Pricing Plans for Every Need</h2>
      </div>

      <div className='pricingCards d-flex justify-content-center gap-4'>
        <PricingCards title="Regular License" price="35" text='Use, by you or one client, in a single end product which end users are not charged for.' features={regularFeatures} />

        <PricingCards
          title="Extended License"
          price="499"
          text='Use, by you or one client, in a single end product which end users can be charged for.'
          recommended
         features={extendedFeatures}
        />
      </div>
      <div>
        <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/sec-bg-11.png" alt="" className='leftImg' />
        <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/sec-bg-10.png" alt="" className='rightImg'/>
        <img src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/sec-bg-12.png" alt="" className='bottomImg'/>
      </div>
    </div>
  )
}

export default Pricing