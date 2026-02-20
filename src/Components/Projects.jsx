import Data from '../Data/projectData'

export default function Projects() {

  const dataElement = Data.map((item) => (
    <div key={item.id} className="myProject">
      <div className="project-image"><img style={{borderRadius:"50px"}} width="100px" src={item.img.src} alt={item.img.alt} /></div>
      <div className="project-content">
        <h3>{item.name}</h3>
        <div className="project-tags">
          <span className="project-tag">{item.language.first}</span>
          <span className="project-tag">{item.language.second}</span>
          <span className="project-tag">{item.language.third}</span>
          <span className="project-tag">{item.language.fourth}</span>
        </div>
        <p>{item.about}</p>

        <div className="project-links">
          <a target="_blank" href={item.live}>
            Live Demo
          </a>
          <a target="_blank" href={item.git}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  ));
    return (
      <section id="projects">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Some of my recent Work</p>
        </div>

        <div className="project-grid">
          {dataElement}
        </div>
      </section>
    );
}