import React from 'react'
import './Css/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="text" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        <button>Continue</button>
        </div>
        <p className='loginsignup-login'>Alredy Have An Account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nulla fugiat alias?</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
