import FooterData from '../Data/Footer_Link_Data'
import { useEffect, useState } from "react";

export default function Footer(props) {
  const [showScrollIcon, setShowScrollIcon] = useState(false)

  useEffect(() => {
    function handleScrollIcon() {
      if (window.scrollY < 500)
          setShowScrollIcon(false)
      else
        setShowScrollIcon(true)
    }
    window.addEventListener('scroll', handleScrollIcon)
    return () => window.removeEventListener('scroll', handleScrollIcon)
  }, [])
    return (
      <>
        <footer className="footer-content">
          <div className="footer-links">
            <a onClick={props.onHomeClick}>Home</a>
            <a onClick={props.onAboutClick}>About</a>
            <a onClick={props.onProjectClick}>Projects</a>
            <a onClick={props.onContactClick}>Contact</a>
          </div>
          <div className="social-links">
            {FooterData.connect.map((item, index) => (
              <a key={index} href={item.link} target="_blank">
                {item.icon}
              </a>
            ))}
          </div>
          <div className="copyright">
            <p>
              <small>{FooterData.copy}</small>
            </p>
            <p>
              <small>{FooterData.copyDesc}</small>
            </p>
          </div>
        </footer>
        {showScrollIcon && (
          <div onClick={props.onHomeClick} className="scroll-top">
            {FooterData.topGoIcon}
          </div>
        )}
      </>
    );
}