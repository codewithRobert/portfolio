import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>REview from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client_review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            error velit fugit at ad vel quas eveniet sequi sunt totam voluptatum
            ex, et quo veritatis! Similique dolores praesentium eaque minima.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client_review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            error velit fugit at ad vel quas eveniet sequi sunt totam voluptatum
            ex, et quo veritatis! Similique dolores praesentium eaque minima.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client_review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            error velit fugit at ad vel quas eveniet sequi sunt totam voluptatum
            ex, et quo veritatis! Similique dolores praesentium eaque minima.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client_review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            error velit fugit at ad vel quas eveniet sequi sunt totam voluptatum
            ex, et quo veritatis! Similique dolores praesentium eaque minima.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
