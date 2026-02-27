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
            <a href="https://github.com/bimannandib" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/biman-nandi-bn/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            <a href="mailto:bimannandib@gmai.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </a>
            <a href="https://x.com/LunarKode" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
          </div>
          <div className="copyright">
            <p>
              <small>&copy; 2026 Biman Nandi. All Rights Reserved.</small>
            </p>
            <p>
              <small>Built with React ⚛️</small>
            </p>
          </div>
        </footer>
        {showScrollIcon && (
          <svg
            width="100%"
            height="100%"
            className="scroll-top"
            onClick={props.onHomeClick}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#ffffff"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path d="M479.785,205.067L287.954,13.236C279.418,4.7,268.07,0,256.001,0c-12.07,0-23.417,4.7-31.953,13.236L32.215,205.067    c-8.536,8.535-13.235,19.883-13.235,31.953c0,12.071,4.701,23.418,13.235,31.954c17.621,17.619,46.289,17.618,63.907,0    l114.69-114.691v312.528c0,24.918,20.271,45.189,45.189,45.189s45.189-20.271,45.189-45.189V154.283l114.689,114.691    c17.619,17.618,46.287,17.618,63.907,0c8.536-8.536,13.236-19.883,13.236-31.954C493.021,224.951,488.32,213.602,479.785,205.067z     M465.362,254.55c-9.667,9.667-25.394,9.667-35.059,0L298.202,122.449c-2.917-2.917-7.305-3.789-11.115-2.211    c-3.81,1.579-6.296,5.299-6.296,9.423v337.151c0,13.669-11.121,24.79-24.79,24.79c-13.669,0-24.79-11.121-24.79-24.79V129.66    c0-4.126-2.485-7.844-6.296-9.423c-1.263-0.523-2.587-0.777-3.901-0.777c-2.654,0-5.263,1.037-7.214,2.988L81.698,254.55    c-9.666,9.667-25.393,9.667-35.059,0c-4.682-4.682-7.261-10.907-7.261-17.529c0-6.621,2.578-12.847,7.261-17.529L238.471,27.659    c4.682-4.682,10.908-7.261,17.529-7.261c6.621,0,12.847,2.578,17.529,7.261l191.832,191.832    c4.682,4.682,7.261,10.908,7.261,17.529C472.622,243.643,470.044,249.867,465.362,254.55z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M371.835,137.616l-3.06-3.06c-3.984-3.983-10.442-3.983-14.425,0c-3.983,3.984-3.983,10.442,0,14.425l3.06,3.06    c1.991,1.992,4.602,2.987,7.212,2.987s5.221-0.995,7.213-2.987C375.818,148.057,375.818,141.599,371.835,137.616z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M345.827,111.608l-80.574-80.574c-3.984-3.983-10.442-3.984-14.425,0c-3.983,3.984-3.983,10.442,0,14.425l80.574,80.574    c1.991,1.992,4.602,2.987,7.212,2.987c2.61,0,5.221-0.995,7.213-2.987C349.81,122.049,349.81,115.591,345.827,111.608z" />
              </g>
            </g>
          </svg>
        )}
      </>
    );
}