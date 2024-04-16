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
              <img className='imo' src='./mk.jpg'  />
              <div className='not'>
                 <h1>Hi!</h1>
                 <h1>I'm MINTESNOT KETEMA</h1>
                 <p>
                 For years I've been going to universities across the 
                 country to encourage students in universities. For some 
                 time I said that it's now necessary to actually go through 
                 college. But the idea was that I was upset that most students
                  would go to college only for the degree sake, not for the 
                  knowledge.Arguably you can learn all the foundations of 
                  Computer Science by yourself. Different from Medicine or 
                  Civil Engineering or Law, you don't need a degree in order 
                  to get a license to work in the field.But the argument doesn't 
                  hold because most programmers that don't go through college 
                  also don't take the time to actually learn the disciplines of
                   our field and Computer Science is absolutely necessary if you
                    want to pursue a life time career.So I changed my stance and 
                    I'd rather encourage people to actually start brushing up their 
                    skills in the academia first.
                 </p>
                 <button>View Work</button>
              </div>
              
                </div>
      </div>
    </div>
  )
}

export default Home
