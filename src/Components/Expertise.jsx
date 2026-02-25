import skillsData from "../Data/SkillsData";

export default function Expertise() {
  return (
    <section className="expertise-section">
      <div className="heading">
        <h1>Skills & Expertise</h1>
        <p>Technologies and tools I work with</p>
      </div>

      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <div key={index} className="skill-category">
            <h3>{group.category}</h3>
            <div className="skill-tag">
              {group.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}