import React from "react"
import { BsFillCalendarFill } from "react-icons/bs"
import { FaHandshake } from "react-icons/fa"
import { AiTwotoneHourglass } from "react-icons/ai"

const Services = () => {
  return (
    <div className='container'>
      <div className='services'>
        <div className='services_left'>
          <h1>Create Your Wedding With Us</h1>
          <p>
            Pain is what we go through as we become older. We get insulted by
            others, lose trust for those others. We get back stabbed by friends.
            It becomes harder for us to give others a hand.
          </p>
          <h2>300+</h2>
          <p className='para'>Events around the world.</p>
        </div>
        <div className='services_right'>
          <div className='service_one'>
            <div className='icon'>
              <BsFillCalendarFill />
            </div>
            <div className='content'>
              <h2>Full Wedding Planner</h2>
              <p>It becomes harder for us to give others a hand.</p>
              <p>We get Our heart broken by people we love.</p>
            </div>
          </div>
          <div className='service_one'>
            <div className='icon'>
              <FaHandshake />
            </div>
            <div className='content'>
              <h2>Professional Partnership</h2>
              <p>As we live, our hearts turn colder.</p>
              <p>Cause pain is what we go through as we become older.</p>
            </div>
          </div>
          <div className='service_one'>
            <div className='icon'>
              <AiTwotoneHourglass />
            </div>
            <div className='content'>
              <h2>Best Experience</h2>
              <p>When we lose family over time.</p>
              <p>What else could rust the heart more over time? Blackgold.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
