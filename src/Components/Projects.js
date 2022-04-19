import React, {useEffect} from 'react';
import Stopwatch from './Stopwatch';
import RoundstuffImg from '../Assets/Images/Roundstuff.png';
import WeatherAppImg from '../Assets/Images/weatherapp.png';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Projects() {
    useEffect(() => {
        AOS.init({
          duration : 1200
        });
      }, []);
    return (
        <div id="Projects" className="projects-container">
            <div className="project-intro">
                <h2>My Projects</h2>
                <p>In this section, I would like to showcase some of the projects that I have developed so far in my career. You'll be able to see fully functional components, such as a stopwatch and a weather app, but also responsive websites, such as RoundStuff (my mock e-commerce page). If you're interested to see more, check out my github page!</p><p> You can find the link in the top section or in the footer below.</p>
            </div>
            <div className="project-stopwatch">
                <div className="project-description" data-aos={"fade-left"}>
                    <h2>The Stopwatch</h2>
                    <p>This is my first ever JavaScript project. I built this stopwatch with pure VanillaJS, using increments and on click functions. </p>
                    <p>When the stopwatch is started, the centiseconds start incrementing every 10 milliseconds. As soon as the centiseconds hit 100, the seconds increment, and the centiseconds restart counting to 100. The same process happens when the seconds reach 60. At this point, the seconds restart counting from zero and the minute increments. </p>
                    <p>The reset button wipes the data so you're able to restart counting!</p>
                </div>
                <div className="project-example" data-aos={"fade-right"}>
                    <Stopwatch />
                </div>
            </div>
            <div className="project-roundstuff">
                <div className="project-description" data-aos={"fade-right"}>
                    <h2>RoundStuff</h2>
                    <p>RoundStuff is my first full (mock) webshop.</p><p> It is fully functional and mobile-friendly.</p>
                    <p>It's a shop that's specialised in selling round products, such as balls, fruits and donuts. You will find the occasional differently-shaped product, but hey, couldn't exclude strawberries and bananas.</p>
                    <p>RoundStuff has a shopping cart and log-in functionality, thanks to Firebase, but there is no payment option in the app.</p>
                    <p>Click on the image to visit the page!</p>
                </div>
                <div className="project-example" data-aos={"fade-left"}>
                    <a target="_blank" href="https://roundstuff.netlify.app/" rel="noreferrer"><img src={RoundstuffImg} alt="This is a preview of RoundStuff" /></a>
                </div>
            </div>
            <div className="project-weather">
                <div className="project-description" data-aos={"fade-left"}>
                    <h2>The Weather App</h2>
                    <p>This weather app was a test for me to use an API for the first time. I used an API from <a target="_blank" href="https://openweathermap.org/api" rel="noreferrer" style={{textDecoration:"none", color:"whitesmoke", fontWeight:"bold"}}>OpenWeatherMap</a>. Once you click on the image, you will be redirected to the page where this app is located. I have added a card for Maastricht and one for Marseille. The button at the bottom will flip the card and show the back, which includes a forecast for the rest of the week! Click on the day to open the accordion for more detailed information.</p>
                </div>
                <div className="project-example" data-aos={"fade-right"}>
                    <a target="_blank" href="https://joeri-weather-app.netlify.app/" rel="noreferrer"><img src={WeatherAppImg} alt="This is a preview of my weather app" /></a>
                </div>
            </div>
            {/* <p style={{margin: 0 + " auto", color: "whitesmoke", marginBottom: 25 +"px"}}>If you're interested to see more of my projects, feel free to check <a target="_blank" href="https://github.com/JoerivanMegen" rel="noreferrer" style={{fontWeight: "bold", color:"whitesmoke", textDecoration:"none"}}>my GitHub</a> out!</p> */}
            
        </div>
    )
}
