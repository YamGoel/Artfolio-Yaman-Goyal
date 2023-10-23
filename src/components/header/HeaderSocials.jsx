import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsPen} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/yaman-goyal-a827ab156" target = "_blank"><BsLinkedin /></a>
    <a href="https://www.instagram.com/yaman_goel/" target = "_blank"><BsInstagram /></a>
    <a href="https://www.instagram.com/silenceinwhispers/" target = "_blank"><BsPen /></a>
    </div>
  )
}

export default HeaderSocials
