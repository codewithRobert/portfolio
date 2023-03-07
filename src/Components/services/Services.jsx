import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User research and user strategy.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>User testing..</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>UI design.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/Ux */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create Responsive Websites Wth Multi-Functionality .</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Developement for Running Server and cloud server.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Content.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Friendly.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Interaction.</p>
            </li>
          </ul>
        </article>

        {/* END OF Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adobe Premiere Pro.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Storytelling.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Strategy..</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Video Editing.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Digital Media.</p>
            </li>
          </ul>
        </article>

        {/* END OF Content CReation */}
      </div>
    </section>
  )
}

export default Services
