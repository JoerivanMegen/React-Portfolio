import React from 'react';
import Indeed from '../Assets/Images/Indeed-Logo.png';
import Cognizant from '../Assets/Images/cognizant-logo.png';
import SBG from '../Assets/Images/sbg.png';
import Accenture from '../Assets/Images/accenture.png';
import TG from '../Assets/Images/techgrounds.png';
import Zuyd from '../Assets/Images/Zuyd-Hogeschool.png';
import {Link} from 'react-router-dom';

function Workexp() {

    //Experience Opener Mobile
    const openExp = () => {
        const exp = document.querySelector('.experience-container')
            
            //burger to cross toggle
        exp.classList.toggle('toggle');
    }


    return (
        <div className="experience-container" >
            <h2 id="CV">Work Experience and Education</h2>
            <p className="small">Touch card for more information</p>
            <p className="collapse-button" onClick={openExp}>Show more experience!{<br/>}(I've had more than one job)</p>
            <p className="show-less" onClick={openExp}>Show less!</p>
            <div className="card-container">
                <div className="card">
                    <div className="image-container">
                        <img style={{width: 90+"%", height: "auto"}} alt="Accemture" src={Accenture}  className="kedgeimg"></img>
                        <Link to={{pathname: "/", search: "?accenture=true"}} className="more-info-button">
                            More info
                        </Link>
                    </div>
                    <div className="card-bottom">   
                        <h3 className="job company">Accenture</h3>
                        <p className="job location">Heerlen, the Netherlands</p>
                        <p className="job title">Web Development Engineer</p>
                        <p className="job duration">December, 2021 - Present</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img alt="Indeed" src={Indeed}></img>
                        
                        <Link to={{pathname: "/", search: "?indeed=true"}} className="more-info-button">
                            More info
                        </Link>
                        
                    </div>
                    <div className="card-bottom">
                        <h3 className="job company">Indeed</h3>
                        <p className="job location">Dublin, Ireland</p>
                        <p className="job title">Account Strategist Benelux</p>
                        <p className="job duration">January, 2020 - April, 2021</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img alt="Cognizant" src={Cognizant}></img>
                        <Link to={{pathname: "/", search: "?cognizant=true"}} className="more-info-button">
                            More info
                        </Link>
                    </div>
                    <div className="card-bottom">
                        <h3 className="job company">Cognizant</h3>
                        <p className="job location">Dublin, Ireland</p>
                        <p className="job title">Google Ads Specialist</p>
                        <p className="job duration">October, 2018 - January, 2020</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img alt="SmartBuyGlasses" src={SBG}></img>
                        <Link to={{pathname: "/", search: "?sbg=true"}} className="more-info-button">
                            More info
                        </Link>
                    </div>
                    <div className="card-bottom">
                        <h3 className="job company">SmartBuyGlasses</h3>
                        <p className="job location">Turin, Italy</p>
                        <p className="job title">Digital Marketing Intern</p>
                        <p className="job duration">February, 2018 - July, 2018</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img style={{height: 70+"%"}} alt="Zuyd Hogeschool" src={Zuyd}></img>
                        <Link to={{pathname: "/", search: "?zuyd=true"}} className="more-info-button">
                            More info
                        </Link>
                    </div>
                    <div className="card-bottom">
                        <h3 className="job company">Zuyd Hogeschool</h3>
                        <p className="job location">Maastricht, the Netherlands</p>
                        <p className="job title">HBO European Studies</p>
                        <p className="job duration">September, 2013 - July, 2018</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img style={{width: 90+"%", height: "auto"}}alt="TechGrounds" src={TG}  className="tgimg"></img>
                        <Link to={{pathname: "/", search: "?techgrounds=true"}} className="more-info-button">
                            More info
                        </Link>
                    </div>
                    <div className="card-bottom">
                        <h3 className="job company">TechGrounds</h3>
                        <p className="job location">Amsterdam, the Netherlands</p>
                        <p className="job title">Web Development</p>
                        <p className="job duration">May, 2021 - October, 2021</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Workexp
