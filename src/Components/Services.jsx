export default function Services(props) {
    return (
      <section id="services">
        <div className="section-header">
          <h2>What I Offer</h2>
          <p>Services I provide to help bring your ideas to life</p>
        </div>

        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Web Development</h3>
          <p>
            Building responsive, modern web applications using React, HTML, CSS,
            and JavaScript. From concept to deployment, I create user-friendly
            interfaces that deliver exceptional user experiences.
          </p>

          <ul className="service-features">
            <li>Responsive Website Development</li>
            <hr />
            <li>React Application Development</li>
            <hr />
            <li>Front-end Development</li>
            <hr />
            <li>UI Implementation</li>
            <hr />
            <li>Version Control & Collaboration</li>
          </ul>
          <button onClick={props.onContactClick} className="btn btn-primary">Let's Work Together</button>
        </div>
      </section>
    );
}