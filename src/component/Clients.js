import React from 'react'
import './client.css'
import c1 from '../imagess/cl1.jpg'
import c2 from '../imagess/cl2.jpg'
import c3 from '../imagess/cl3.jpg'
import c4 from '../imagess/cl4.jpg'

function Clients() {
  return (
    <div className='clics'>
      <div className='prospile'>
        <h1>Portfolio</h1>
        <div className='conf'>
              <div className='porf'>
                <img className='poimg'src={c1}  alt=''  />

                <button className='pbut'>Client 1</button>

                <p><i>When it comes to good customer service, 
                  communication is king and text messaging 
                  reigns supreme.There is a spiritual aspect to our lives </i> </p>

              </div>
              <div className='porf'>
                <img className='poimg'src={c2}  alt=''  />

                <button className='pbut'>Client 2</button>

                <p><i>When you help others feel important, 
                  you help yourself feel important too." 
                  – David J. Schwartz, Author and Motivational Speaker </i> </p>

              </div>
              <div className='porf'>
                <img className='poimg'src={c4}  alt=''  />

                <button className='pbut'>Client 3</button>

                <p><i>There is a spiritual aspect to our lives — 
                  when we give, we receive — when a business does 
                  something good for somebody, 
                  that somebody feels good about them </i> </p>

              </div>
              </div>
      </div>
    </div>
  )
}

export default Clients
