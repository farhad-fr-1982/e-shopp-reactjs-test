import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclosive Offers On Your Email</h1>
      <p>Subscribe to Our NewLetter And Stay Update</p>
      <div>
        <input type="email" placeholder='Your Email...'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
