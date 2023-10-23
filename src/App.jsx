import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Logo from './components/Logo Designing/Logo'
import Card from './components/Business Card Design/Card'
import Art from './components/Digital Art/Art'
import Photo from './components/Photography/Photo'
import Video from './components/Videography/Video'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Logo />
      <Card />
      <Art />
      <Photo />
      <Video />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
