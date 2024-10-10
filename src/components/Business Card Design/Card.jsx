import React from 'react'
import './card.css'
import card2 from '../../assets/card1.png'
import card1 from '../../assets/card2.png'

const data = [
  {
    id: 1,
    image: card1,
  },
  {
    id: 2,
    image: card2,
  }
]

const Card = () => {
  return (
    <section id='card'>
      <h5>Graphics  Designing</h5>
      <h2>Business Card</h2>

      <div className="container card_container">
        {
          data.map(({id, image, title}) => {
            return(
            <article key={id} className='card_item'>
            <div className="card_item-image">
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

export default Card
