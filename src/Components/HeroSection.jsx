import profile from "../Assets/profile.png"
export default function HeroSection(props) {
    return (
      <section className="hero-section">
        <div className="hero-texts">
          <h1>Hi, I'm Biman Nandi</h1>
          <h6>Web Developer | Engineering Student | Problem Solver</h6>
          <p>
            Pre-final-year engineering student passionate about building
            interactive web applications with React and solving complex problems
            with Data Structures & Algorithms.
          </p>
          <div className="button-section">
            <button onClick={props.onProjectClick} className="btn1">View My Work</button>
            <button className="btn2">Get In Touch</button>
          </div>
        </div>
        <div className="hero-img">
            <img src={profile} alt="profile-pic" />
        </div>
      </section>
    );
}