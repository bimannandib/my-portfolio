import DataStats from '../Data/AboutData1'
import eduData from '../Data/AboutData2'

export default function AboutSection() {
  const aboutStats = DataStats.map((item, index) => (
    <div key={index} className="stat-card">
      <div className="stat-icon">{item.icon}</div>
      <h3>{item.title}</h3>
      <p>{item.about}</p>
    </div>
  ));

  const academyData = eduData.map((item, index) => (
    <>
      <div key={index} className="education-item">
        <h3>{item.title}</h3>
        <div className="institution">{item.institute}</div>
        <div className="details">{item.details}</div>
      </div>

      {index !== eduData.length - 1 && <hr />}
    </>
  ));
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
              I specialize in frontend development using React and enjoy
              building clean, responsive, and user-friendly interfaces.
              Currently, I am learning backend technologies to become a
              full-stack developer. I love building real-world projects and
              continuously improving my problem-solving skills.
            </p>

            <div className="stats-grid">{aboutStats}</div>
          </div>

          <div className="education-timeline">
            <h3>Education</h3>
            {academyData}
          </div>
        </div>
      </section>
    );
}