import React from 'react'
import './header.css'
import Cta from './Cta'
import my from '../../assests/my.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1> Rahul Dhiman </h1>
        <h4 className="text-light">Fullstack Developer</h4>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={my} alt="my" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
