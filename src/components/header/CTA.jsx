import React from 'react'
import { useState } from 'react'

const CTA = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='cta'>
      <a href="#art" onClick={() => setActiveNav('#experience')} className='btn'>Here is a Preview</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
