import Data from '../Data/AboutData'
import React from "react";

export default function AboutSection() {
    return (
      <section id="about">
        <div className="section-header">
          <h1>About Me</h1>
          <p>Get to know more about my background and journey</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>{Data.me}</p>

            <p>{Data.skill}</p>

            <div className="stats-grid">
              {Data.statsGrid.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <h3>{stat.title}</h3>
                  <p>{stat.about}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="education-timeline">
            <h3>Education</h3>
            {Data.education.map((edu, index) => (
              <React.Fragment key={index}>
                <div className="education-item">
                  <h3>{edu.title}</h3>
                  <div className="institution">{edu.institute}</div>
                  <div className="details">{edu.details}</div>
                </div>

                {index !== Data.education.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    );
}