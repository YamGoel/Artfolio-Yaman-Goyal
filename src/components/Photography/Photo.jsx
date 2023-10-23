import React from 'react'
import './photo.css'
import IMG1 from '../../assets/Pictures/IMG1.jpg'
import IMG2 from '../../assets/Pictures/IMG2.jpg'
import IMG3 from '../../assets/Pictures/IMG3.jpg'
import IMG4 from '../../assets/Pictures/IMG4.jpg'
import IMG5 from '../../assets/Pictures/IMG5.jpg'
import IMG6 from '../../assets/Pictures/IMG6.jpg'
import IMG7 from '../../assets/Pictures/IMG7.jpg'
import IMG8 from '../../assets/Pictures/IMG8.jpg'
import IMG9 from '../../assets/Pictures/IMG9.jpg'
import IMG10 from '../../assets/Pictures/IMG10.jpg'
import IMG11 from '../../assets/Pictures/IMG11.jpg'
import IMG12 from '../../assets/Pictures/IMG12.jpg'
import IMG13 from '../../assets/Pictures/IMG13.jpg'
import IMG14 from '../../assets/Pictures/IMG14.jpg'
import IMG15 from '../../assets/Pictures/IMG15.jpg'
import IMG16 from '../../assets/Pictures/IMG16.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    place: "Cafe"
  },
  {
    id: 2,
    image: IMG2,
    place: "Hotel"
  },
  {
    id: 3,
    image: IMG3,
    place: "Bangalore"
  },
  {
    id: 4,
    image: IMG4,
    place: "Bhiwadi"
  },
  {
    id: 5,
    image: IMG5,
    place: "Manyata"
  },
  {
    id: 6,
    image: IMG6,
    place: "Street"
  },
  {
    id: 7,
    image: IMG7,
    place: "Bangalore"
  },
  {
    id: 8,
    image: IMG8,
    place: "Jakkur"
  },
  {
    id: 9,
    image: IMG9,
    place: "Bangalore"
  },
  {
    id: 10,
    image: IMG10,
    place: "Vellore"
  },
  {
    id: 11,
    image: IMG11,
    place: "Vellore"
  },
  {
    id: 12,
    image: IMG12,
    place: "Bangalore"
  },
  {
    id: 13,
    image: IMG13,
    place: "PG"
  },
  {
    id: 14,
    image: IMG14,
    place: "Street"
  },
  {
    id: 15,
    image: IMG15,
    place: "Hotel"
  },
  {
    id: 16,
    image: IMG16,
    place: "Street"
  }
]

const Photography = () => {
  return (
    <section id='photo'>
      <h5>Here is what I Captured</h5>
      <h2>Photography</h2>

      <div className="container photo_container">
        {
          data.map(({id, image, place}) => {
            return(
            <article key={id} className='photo_item'>
            <div className="photo_item-image">
              <img src={image} alt=" " />
            </div>
            <div class="middle">
                <div class="text">{place}</div>
              </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Photography
