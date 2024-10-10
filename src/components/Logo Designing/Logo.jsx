import React from 'react'
import './logo.css'
import logo from '../../assets/logo.png'
import logo1 from '../../assets/My Logo.png'
import logo2 from '../../assets/thriftsell.png'
import logo3 from '../../assets/letmeorder.png'
import logo4 from '../../assets/fitfinity.png'
import logo5 from '../../assets/threadbend.png'
import logo6 from '../../assets/medibed.png'
import logo7 from '../../assets/learnasakid.png'
import logo8 from '../../assets/elbed.png'
import logo9 from '../../assets/kamklick.png'

const data = [
  {
    id: 1,
    image: logo1,
    title: "Yaman Goyal"
  },
  {
    id: 2,
    image: logo2,
    title: "ThriftSell"
  },
  {
    id: 3,
    image: logo3,
    title: "LetMeOrder.in"
  },
  {
    id: 4,
    image: logo4,
    title: "FitFinity"
  },
  {
    id: 5,
    image: logo5,
    title: "ThreadBend"
  },
  {
    id: 6,
    image: logo6,
    title: "MediBed"
  },
  {
    id: 7,
    image: logo7,
    title: "Learn as a Kid"
  },
  {
    id: 8,
    image: logo8,
    title: "ElBed"
  },
  {
    id: 9,
    image: logo9,
    title: "KamKlick"
  }
]

const Logo = () => {
  return (
    <section id='logo'>
      <h5>Graphics  Designing</h5>
      <h2>Logo</h2>

      <div className="container logo_container">
        {
          data.map(({id, image, title}) => {
            return(
            <article key={id} className='logo_item'>
            <div className="logo_item-image">
              <img nosave className='img' src={image} alt=" " />
              <h3>{title}</h3>
            </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Logo
