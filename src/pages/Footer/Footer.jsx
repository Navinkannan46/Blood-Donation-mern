import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-grid">
        <div className='item1'>
          <h3>BLOOD CENTER</h3>
          <p>To save lives by ensuring a safe, sufficient, and timely  supply of blood through voluntary donations,community engagement, and strict quality standards.</p>
          <span>+1 (234) 567 89 00</span>
        </div>
        <div className='item2'>
          <h2>Information</h2>
          <p>About us</p>
          <p>Our Mission</p>
          <p>how to help</p>
        </div>
        <div className='item3'>
          <h2>locations</h2>
          <p>1425 Maple Drive, Suite 101, Denver, CO 80203</p>
          <p>6789 Cedar Lane, San Diego, CA 92103</p>
          <p>230 Oak Street, Room 2B, Boston, MA 02108</p>
          <p>4567 Willow Avenue, Austin, TX 78701</p>
        </div>
      </div>
    </div>
  )
}

export default Footer