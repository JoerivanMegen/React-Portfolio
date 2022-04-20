import React from "react";
import Modal from "../Modal";
import Joeri from "../../Assets/Images/joeri.png";

export default function AboutMeModal(props) {
    let params = new URLSearchParams(props.location.search);

    return (
      params.get("about-me") && (
        <Modal
          onClick={() => {
            props.history.push(props.location.pathname);
          }}
        >
          <div className="modal-header">
            <div className="close-button"  onClick={() => {
            props.history.push(props.location.pathname)}}>
              <div className="close-one"></div>
              <div className="close-two"></div>
            </div>
            <div className="modal-logo">
              <img src={Joeri} alt="This is me"/>
            </div>
            <div className="job-information">
              <div className="modal-job-title">Joeri van Megen</div>
              <div className="modal-job-location">Maastricht, the Netherlands</div>
              <div className="modal-job-duration">20 August 1994</div>
            </div>
            <div className="job-keywords">
              <p>Current Stack: </p>
              <ul>
                <li>HTML</li>
                <li>CSS/SASS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
              </ul>
            </div>
            
          </div>
          <div className="modal-job-details">
            
            <h3>About me:</h3>
            <p>Hi! I'm Joeri. <br/>
            And in 2021 I've started my journey into web development. <br/>
            Over the past three years I've been active in several business roles abroad and after working on several projects in my previous jobs, I realised that I loved to create and innovate more than I enjoyed making sales and writing up reports.</p>
            <br/>
            <p>I've always had an interest in the IT industry and development as a whole, but I never really had the guts to make the move, and I didn't know where to start to learn how to do it. However, when Covid-19 hit in 2020, suddenly I had all this time on my hands and I eventually got introduced to TechGrounds.</p>
            <p>Here I got great guidance from more experienced developers, to learn how to develop, but also to learn how I could get into the job market successfully.  </p>
            <br/>
            <p>This portfolio mightn't seem much to the more experienced developers among you guys, but it is currently one of my proudest achievements in this sector.</p>
            <h3>My highlighted skills:</h3>
            <ul>
              <li><span style={{fontWeight: "bold"}}>Innovation:</span> What drives me is to come up with new, functional ideas to tackle certain situations with a fresh approach. An example would be how I created an account management tool at Indeed. You can read more about this in my "Work Experience"-section. They even gave me an award for the tool! </li>
              <li><span style={{fontWeight: "bold"}}>Googling:</span> This mightn't seem like a strong skill, but I felt like I needed to add this anyway. All information is available on the internet. So, arguably, it's more important to be able to gather this information when necessary than it is to know everything by heart. Luckily for me, my experience as a Google Ads Specialist has helped me to understand how Google's algorithms give results so that I can use the engine very efficiently.</li>
              <li><span style={{fontWeight: "bold"}}>Communication:</span> I have been told my communication skills are of a high level. Weird to write stuff like this about myself, but I would agree. I'm able to clearly state what needs to be communicated and I am not afraid to open my mouth or to pick up the phone. </li>
              <li><span style={{fontWeight: "bold"}}>Analytical Thinking:</span> One of my strong suits is my ability to think analytically. I like to take distance from the issue that I am tring to solve to see the bigger picture. Checking all aspects piece by piece helps me find the root of the problem, so I can solve them more easily.</li>
            </ul>
            <br/><br/><br/>
          </div>
        </Modal>
      )
    );
  }