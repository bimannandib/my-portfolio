import {useRef} from 'react'
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import Expertise from "./Expertise";
import Services from "./Services";

export default function MainComponent() {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const skillRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)
  return (
    <>
      <div ref={homeRef}>
        <Header
          onHomeClick={() =>
            homeRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onAboutClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onSkillClick={() =>
            skillRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onProjectClick={() =>
            projectRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onContactClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <HeroSection />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={skillRef}>
        <Expertise />
      </div>
      <Services />
      <Footer />
    </>
  );
}
