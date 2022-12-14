import React from 'react'
import cv from '../../assests/My Resume.pdf'

const Cta = () => {
  return (
    <div className="cta">
      <a href={cv} download className="btn">
        DOwnload CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let;s Talk
      </a>
    </div>
  )
}

export default Cta
