import React from 'react'
import footer_logo from '../../Assets/logo_big.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import pinset_icon from '../../Assets/pintester_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className="footer-social-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-social-container">
                <img src={pinset_icon} alt="" />
            </div>
            <div className="footer-social-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right</p>
        </div>
    </div>
  )
}

export default Footer