export default function AboutSection() {
    return (
      <section id="about">
        <div className="section-header">
          <h1>About Me</h1>
          <p>Get to know more about my background and journey</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Pre-final year B.Tech student in Electronics and
              Telecommunication at Kalinga Institute of Industrial Technology,
              set to graduate in 2027. My journey in technology has led me to
              master Data Structures & Algorithms and develop a passion for web
              development.
            </p>
            <p>
              I love creating interactive, user-friendly applications using
              modern technologies like React, and I'm constantly learning and
              building projects to sharpen my skills. My goal is to become a
              proficient full-stack developer and contribute to innovative
              projects that make a difference.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">🎓</div>
                <h3>Education</h3>
                <p>B.Tech (Expected 2027)</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">💻</div>
                <h3>Specialization</h3>
                <p>Web Development</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <h3>DSA</h3>
                <p>Completed</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🚀</div>
                <h3>Status</h3>
                <p>Open to Opportunities</p>
              </div>
            </div>
          </div>

          <div className="education-timeline">
            <h3>Education</h3>
            <div className="education-item">
              <h3>B.Tech in Electronics and Telecommunication</h3>
              <div className="institution">
                Kalinga Institute of Industrial Technology
              </div>
              <div className="details">Expected Graduation: 2027</div>
            </div>

            <hr />

            <div className="education-item">
              <h3>Higher Secondary (12th)</h3>
              <div className="institution">WBCHSE</div>
              <div className="details">Score: 89.1%</div>
            </div>

            <hr />

            <div className="education-item">
              <h3>Secondary (10th)</h3>
              <div className="institution">WBBSE</div>
              <div className="details">Score: 72.4%</div>
            </div>
          </div>
        </div>
      </section>
    );
}