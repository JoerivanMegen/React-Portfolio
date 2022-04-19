import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    // faFacebookSquare, 
    faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-backdrop-left">
                <div className="blue-line one"></div>
                <div className="blue-line two"></div>
            </div>
            <div className="footer-backdrop-right"></div>
            <div className="footer-content-container">
                <div className="socials-container">
                    {/* <a className="facebook" target="_blank" href="https://www.facebook.com/joeri.vanmegen/"><FontAwesomeIcon size="3x" icon={faFacebookSquare} /></a> */}
                    <a className="github" target="_blank" href="https://github.com/JoerivanMegen" rel="noreferrer"><FontAwesomeIcon size="3x" icon={faGithubSquare} /></a>
                    <a className="email" target="_blank" href="mailto:joerivanmegen1@gmail.com" rel="noreferrer"><FontAwesomeIcon size="3x" icon={faEnvelopeSquare} /></a>
                    <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/joeri-van-megen-620bb014b/" rel="noreferrer"><FontAwesomeIcon size="3x" icon={faLinkedin} /></a>
                </div>
                <p>Created and developed by Joeri van Megen</p>
            </div>
        </div>
    )
}
