import Data from '../Data/ServicesData'
import React from 'react'

export default function Services(props) {
    return (
      <section id="services">
        <div className="section-header">
          <h2>What I Offer</h2>
          <p>Services I provide to help bring your ideas to life</p>
        </div>

        <div className="service-card">
          <div className="service-icon">{Data.icon}</div>
          <h3>{Data.service}</h3>
          <p>{Data.description}</p>

          <ul className="service-features">
            {Data.points.map((item, index) => (
              <React.Fragment key={index}>
                <li>{item}</li>
                {index < Data.points.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </ul>
          <button onClick={props.onContactClick} className="btn btn-primary">
            Let's Work Together
          </button>
        </div>
      </section>
    );
}