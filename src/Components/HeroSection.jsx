import Data from '../Data/HeroSectionData'
export default function HeroSection(props) {
    return (
      <section className="hero-section">
        <div className="hero-texts">
          <h1>Hi, I'm {Data.name}</h1>
          <h6>{Data.title}</h6>
          <p>
            {Data.description}
          </p>
          <div className="button-section">
            <button onClick={props.onProjectClick} className="btn1">View My Work</button>
            <button onClick={props.onContactClick} className="btn2">Get In Touch</button>
          </div>
        </div>
        <div className="hero-img">
            <img src={Data.profile} alt="profile-pic" />
        </div>
      </section>
    );
}