import React from 'react'
import './header.css'
import CTA from './CTA'
import LOGO from '../../assets/logo.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yaman Goyal</h1>
        <h5 className="text-dark">Graphic Designer &nbsp; | &nbsp; Content Writer &nbsp;|&nbsp; Author &nbsp; | &nbsp; Editor &nbsp;|&nbsp; Videographer &nbsp;|&nbsp; Photographer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={LOGO} alt="Logo" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
