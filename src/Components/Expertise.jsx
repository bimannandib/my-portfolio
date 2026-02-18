export default function Expertise() {
    return (
      <section className="expertise-section">
        <div className="heading">
          <h1>Skills & Expertise</h1>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming & DSA</h3>
            <div className="skill-tag">
              <span>Java</span>
              <span>Data Structure</span>
              <span>Algorithm</span>
              <span>Problem Solving</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Web Development</h3>
            <div className="skill-tag">
              <span>React</span>
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Version Control</h3>
            <div className="skill-tag">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </section>
    );
}