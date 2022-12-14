import React from 'react'
import './exprience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Exprience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>FrontEnd Development </h3>
          <div className="experience__content">
            <article className="Experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="Experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="Experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="Experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="Experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="Experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/*end of Frontend  */}

        <div className="experience_backend">
          <h3>Backend Development </h3>
          <div className="experience__content">
            <article className="Experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="Experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="Experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>MySQL-Server</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="Experience__details">
              <BsPatchCheckFill className="experience__details-icon " />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exprience
