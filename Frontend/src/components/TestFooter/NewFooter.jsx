import React from 'react'
import './NewFooter.scss'
import Logo from './logo.svg';
import Location from './Location.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const NewFooter = () => {
  return (
    <footer>
    <div className="content">
      <div className="link-boxes">
        <div className="box">
          <span className="logoflex">
            <img src={Logo} alt="" />
            <span className="logohead">QUALITY CRICKET</span>
          </span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
          <div className='phoneNo'>
            <LocalPhoneIcon  />&nbsp;
            <p>236526352632</p>
          </div>
          <img src={Location} alt="" />
        </div>
        <ul className="box">
          <li className="foothead">RELATED LINKS</li>
          <br />
          <li>Home</li>
            <li>Sale</li>
            <li>Accessories</li>
            <li>All Products</li>
            <li>Contact Us</li>
        </ul>
        <ul className="box">
          <li className="foothead">POLICY</li>
          <br />
          <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
        </ul>
      </div>
      <div className="newsletter-tag">
          <span >Get the latest updates via email.</span>
      </div>
      <div class="form">
              <form id="search-form" class="form-search">
                  <input type="text" class="input-search" placeholder="Enter Your Email"/>
                  <button type="submit" class="btn-search">Subscribe</button>
              </form>
      </div>
    </div>
  </footer>
  )
}

export default NewFooter
