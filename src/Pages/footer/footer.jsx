import React from 'react'

const Footer = () => {
  return (
    <div className="footer-section">
     
      <div className="footer-1">
      <h2>About us</h2>
        <ul>
          <li><a href="">home</a></li>
          <li><a href="">search items</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">FAQs</a></li>
        </ul>
      </div>

      <div className="footer-2">
      <h2>Follow us</h2>
        <div className="sub-footer-1">
        
        <ul>
          <li><a href="#"><i class="uil uil-instagram"></i></a></li>
          <li><a href="#"><i class="uil uil-github"></i></a></li>
          <li><a href="#"><i class="uil uil-linkedin"></i></a></li>
        </ul>
        </div>
        
        <h2>Download now</h2>
        <div className="sub-footer-2">
       
        <ul>
          <li><a href=""><i class="uil uil-apple"></i></a></li>
          <li><a href=""><i class="uil uil-google-play"></i></a></li>
        </ul>
        </div>
      </div>

     
    </div>
  )
}

export default Footer