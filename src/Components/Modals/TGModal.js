import React from "react";
import Modal from "../Modal";
import TGLogo from "../../Assets/Images/techgrounds.png";

export default function TGModal(props) {
    let params = new URLSearchParams(props.location.search);

    return (
      params.get("techgrounds") && (
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
            <div className="modal-logo" 
            style={{ height: 180 + "px" }}
            >
              <img src={TGLogo} alt="Techgrounds Logo" />
            </div>
            <div className="job-information">
              <div className="modal-job-title">Web Development (Front-End)</div>
              <div className="modal-job-location">Amsterdam, the Netherlands</div>
              <div className="modal-job-duration">May, 2021 - October, 2021</div>
            </div>
            <div className="job-keywords">
              <p>Stack:</p>
              <ul>
                <li>HTML, CSS, SCSS and Bootstrap</li>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>Git</li>
              </ul>
            </div>
            
          </div>
          <div className="modal-job-details" style={{marginBottom: 20 + "px"}}>
            <h3 >Education:</h3>
              <p>I started at TechGrounds with nearly no knowledge about development at all. All I knew was different branches in development, the existence of some languages, that there is a strong use of certain logics and maths, and that there is a massive scarcity of people who can do the job.</p>
              <br/>
              <p>It was quite challenging to get started, but HTML seemed rather easy, so it was a nice way step into the sector.</p>
              <br/>
              <p>Next up was CSS. A bit more difficult, especially in terms of positioning and flex.
                <br/> We worked in groups at TechGrounds. Mostly so we could start getting a feel for Scrum and so we could learn from each other. Together we would work on worksheets that would guide us through the principles of CSS (and also the other topics we covered). 
              </p>
              <p>With CSS, we also worked with Bootstrap and SCSS. I'm personally not the biggest fan of Bootstrap, because I prefer to customise a bit more, but I am able to use it to make responsive designs.</p>
              <br/>
              <p>
                Then, the hard part... JavaScript. I had a hard time keeping up with my peers at first. Many times I was close to seeing a laptop-shaped hole in my wall, but eventually, bit by bit, I started to understand more how to use it and also how to use resources online to get the answers that I needed. As you can see in my projects under this section, there are some projects written with JavaScript.
                <br/> The idea of increments and loops seemed quite abstract to me at first, but when you see the practical use of these, it suddenly all starts to make sense.
              </p>
              <br/>
              <p>Since JS was so challenging, I was pretty nervous to get started on React. But I had heard that React had the possibility to write HTML and JavaScript together in one file, which I found quite exciting at the same time. Again, it took me some time to get used to work with React, but I love it now. At the moment, I would say that it is my favourite language to work with (so far).</p>
              <br/>
              <p>Besides all the technical knowledge I gathered, I have also been able to develop myself when it comes to working with Git, Scrum and Kanban boards. It was their way of preparing us for a real job in coding.</p>
          </div>
        </Modal>
      )
    );
  }


