import React from 'react'
import './art.css'
import art1 from '../../assets/Digital Art/sky.png'
import art2 from '../../assets/Digital Art/hill.png'
import art3 from '../../assets/Digital Art/tree.png'
import art4 from '../../assets/Digital Art/street.png'
import art5 from '../../assets/Digital Art/window.png'
import art6 from '../../assets/Digital Art/night.png'
import art7 from '../../assets/Digital Art/birds.jpg'
import art8 from '../../assets/Digital Art/man.png'
// import art9 from '../../assets/Digital Art/.png'


const data = [
  {
    id: 1,
    image: art1,
  },
  {
    id: 2,
    image: art2,
  },
  {
    id: 3,
    image: art3,
  },
  {
    id: 4,
    image: art8,
  },
  {
    id: 5,
    image: art5,
  },
  {
    id: 6,
    image: art6,
  },
  {
    id: 7,
    image: art7,
  },
  {
    id: 8,
    image: art4,
  }
]

const Art = () => {
  return (
    <section id='art'>
      <h5>Graphics  Designing</h5>
      <h2>Digital Art</h2>

      <div className="container art_container">
        {
          data.map(({id, image}) => {
            return(
            <article key={id} className='art_item'>
            <div className="art_item-image">
              <img src={image} alt=" " />
            </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Art
