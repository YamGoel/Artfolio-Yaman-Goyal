import React from 'react'
import './about.css'
import NAME from '../../assets/name.png'
import {LiaAwardSolid} from 'react-icons/lia'
import {CiTimer} from 'react-icons/ci'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5 className='title'>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={NAME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>8+ Years</small>
            </article>

            <article className='about__card'>
              <CiTimer className='about__icon'/>
              <h5>Work Hours</h5>
              <small>8 AM - 9 PM</small>
            </article>

            <article className='about__card'>
              <LiaAwardSolid className='about__icon'/>
              <h5>Level</h5>
              <small>Professional</small>
            </article>
          </div>
          <p>
            Have been working for more than 8 years has given me a hand on various types of editing tools
            and techniques making me dive in editorial world professionally. I have done client works and
            professional works in these years. Connect with me for a professional experience.
            </p>
            <a href="#contact" id='contactbtn' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
