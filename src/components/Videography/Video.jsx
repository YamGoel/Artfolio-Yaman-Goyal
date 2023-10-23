import React from 'react'
import './video.css'
import VDO1 from '../../assets/Videos/VDO1.mp4'
import VDO2 from '../../assets/Videos/VDO2.mp4'
import VDO3 from '../../assets/Videos/VDO3.mp4'
import VDO4 from '../../assets/Videos/VDO4.mp4'
import VDO5 from '../../assets/Videos/VDO5.mp4'
import VDO6 from '../../assets/Videos/VDO6.mp4'


const data = [
  {
    id: 1,
    video: VDO1,
  },
  {
    id: 2,
    video: VDO6,
  },
  {
    id: 3,
    video: VDO5,
  },
  {
    id: 4,
    video: VDO4,
  },
  {
    id: 5,
    video: VDO3,
  },
  {
    id: 6,
    video: VDO2,
  }
]

const Video = () => {
  return (
    <section id='video'>
      <h5>See what I Saw</h5>
      <h2>Videography</h2>

      <div className="container video_container">
        {
          data.map(({id, video}) => {
            return(
            <videoicle key={id} className='video_item'>
            <div className="video_item-video">
            <video width="320" height="240" autoPlay loop muted>
              <source src={video} type="video/mp4"/>
            </video>
            </div>
          </videoicle>
            )
          })
        }
      </div>
    </section>
  )
}

export default Video
