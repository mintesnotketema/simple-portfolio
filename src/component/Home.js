import React from 'react'
import './home.css'


function Home() {
  return (
    <div className='container'>
      <nav className='navbar'>
        <h3 className='logo'>AMAZING NEW BRAND</h3>
        <ul>
            <a><li>HOME</li></a>
           <a><li>CLENTS</li></a> 
           <a><li>BLOG</li></a> 
           <a><li>CONTACT</li></a> 
        </ul>
      </nav>
      <div className='hpage'>
           <div className='bground'>

           </div>
                <div className='imgb'>
              <img className='imo' src='./smile.jpg'  />
              <div className='not'>
                 <h1>Hi!</h1>
                 <h1>I'm Eyerus Fikede</h1>
                 <p>
                 Good Girl Turned Bad Everyone has their own opinion on
                  what makes someone a “good girl.” Some may claim that 
                  good girls are those who do not have casual sex, drink, 
                  or do drugs. By some definitions, good girls are just 
                  those who pretend to be good. In my family, we have our 
                  own definition. Good girls work hard, do well in school 
                  and life, and above all, are sources of support for their 
                  families and friends. In addition, good girls do not get 
                  involved in harmful things, are not outspoken and are never
                  tactless. My family has a culture of good girls. For 
                  generations and generations we have produced good girls. 
                  Sure, I have female relatives who are considered the black 
                  sheep of our family, but we do not talk about them. We 
                  unconsciously focus on breeding and 
                 raising decent, soft-spoken, feminine women.
                 </p>
                 <button>View Work</button>
              </div>
                </div>
      </div>
    </div>
  )
}

export default Home
