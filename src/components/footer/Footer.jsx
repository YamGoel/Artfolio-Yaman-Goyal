import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Yaman Goyal</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#logo">Logo Designing</a></li>
        <li><a href="#card">Business Card</a></li>
        <li><a href="#art">Digital Art</a></li>
        <li><a href="#photo">Photography</a></li>
        <li><a href="#video">Videpgraphy</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/yaman-goyal-a827ab156/ " target='_blank'><AiFillLinkedin /></a>
        <a href="hhttps://www.instagram.com/yaman_goel/" target='_blank'><AiOutlineInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Yaman Goyal. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
