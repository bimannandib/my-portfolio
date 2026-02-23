export default function Expertise() {
    return (
      <section className="expertise-section">
        <div className="heading">
          <h1>Skills & Expertise</h1>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tag">
              <span>Java</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>C</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Web Development</h3>
            <div className="skill-tag">
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Version Control</h3>
            <div className="skill-tag">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Vercel</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>CS</h3>
            <div className="skill-tag">
              <span>DSA</span>
              <span>OOPs</span>
              <span>DBMS</span>
            </div>
          </div>
        </div>
      </section>
    );
}