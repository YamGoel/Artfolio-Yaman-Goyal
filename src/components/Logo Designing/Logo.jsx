import React from 'react'
import './logo.css'
import logo from '../../assets/logo.png'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'

const data = [
  {
    id: 1,
    image: logo,
    title: "Artfolio"
  },
  {
    id: 2,
    image: logo1,
    title: "KamKlick"
  },
  {
    id: 3,
    image: logo2,
    title: "Medibed"
  },
  {
    id: 4,
    image: logo3,
    title: "elBed"
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
              <img nosave src={image} alt=" " />
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
