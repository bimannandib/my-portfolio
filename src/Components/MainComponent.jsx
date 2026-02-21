import {useRef} from 'react'
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import Expertise from "./Expertise";
import Services from "./Services";
import Projects from "./Projects";
import Contacts from "./Contacts";

export default function MainComponent() {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const skillRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)

    function onHomeClick() {
      homeRef.current.scrollIntoView({ behavior: "smooth"})
    }
    function onAboutClick() {
      aboutRef.current.scrollIntoView({ behavior: "smooth"})
    }
    function onSkillClick() {
      skillRef.current.scrollIntoView({ behavior: "smooth"})
    }
    function onProjectClick() {
      projectRef.current.scrollIntoView({ behavior: "smooth"})
    }
    function onContactClick() {
      contactRef.current.scrollIntoView({ behavior: "smooth"})
    }
  return (
    <>
      <Header
        onHomeClick={onHomeClick}
        onAboutClick={onAboutClick}
        onSkillClick={onSkillClick}
        onProjectClick={onProjectClick}
        onContactClick={onContactClick}
      />
      <div ref={homeRef} style={{ scrollMarginTop: "100px" }}>
        <HeroSection onProjectClick={onProjectClick} />
      </div>
      <div ref={aboutRef} style={{ scrollMarginTop: "100px" }}>
        <AboutSection />
      </div>
      <div ref={skillRef} style={{ scrollMarginTop: "100px" }}>
        <Expertise />
      </div>
      <Services />
      <div ref={projectRef} style={{ scrollMarginTop: "100px" }}>
        <Projects />
      </div>
      <div ref={contactRef} style={{ scrollMarginTop: "10px" }}>
        <Contacts />
      </div>
      <Footer
        onHomeClick={onHomeClick}
        onAboutClick={onAboutClick}
        onProjectClick={onProjectClick}
        onContactClick={onContactClick}
      />
    </>
  );
}
