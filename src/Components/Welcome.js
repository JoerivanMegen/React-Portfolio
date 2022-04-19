import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";


export default function Welcome() {
    useEffect(() => {
        AOS.init({
          duration : 800
        });
      }, []);
    return (
        <div className="welcome-container">
            <div className="welcome-info">
                <div className="welcome-text" data-aos={"fade-up"} data-aos-duration={750}>
                    <p className="hi-name">Joeri <span>van Megen</span></p>
                    <p className="hi-front"><span>Front-End</span> Developer</p>
                </div>
                <div className="welcome-buttons" data-aos={"fade-up"}>
                    <div className="socials">
                        <a className="github" target="_blank" href="https://github.com/JoerivanMegen" rel="noreferrer"><FontAwesomeIcon size="4x" icon={faGithubSquare} /></a>
                        <a className="email" target="_blank" href="mailto:joerivanmegen1@gmail.com" rel="noreferrer"><FontAwesomeIcon size="4x" icon={faEnvelopeSquare} /></a>
                        <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/joeri-van-megen-620bb014b/" rel="noreferrer"><FontAwesomeIcon size="4x" icon={faLinkedin} /></a>
                    </div>
                    <Link to={{pathname: "/", search: "?about-me=true"}} className="about-me-button">About Me</Link>
                </div>
            </div>
        </div>
    )
}
