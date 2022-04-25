import React from "react";
import Modal from "../Modal";
import SBGLogo from "../../Assets/Images/sbg.png";

export default function SBGModal(props) {
    let params = new URLSearchParams(props.location.search);

    return (
      params.get("sbg") && (
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
              <img src={SBGLogo} alt="SBG Logo" />
            </div>
            <div className="job-information">
              <div className="modal-job-title">Digital Marketing Intern</div>
              <div className="modal-job-location">Turin, Italy</div>
              <div className="modal-job-duration">February, 2018 - July, 2018</div>
            </div>
            <div className="job-keywords">
              <p>Keywords:</p>
              <ul>
                <li>Digital Marketing</li>
                <li>Social Media Marketing</li>
                <li>SEO</li>
                <li>Partnership Development</li>
              </ul>
            </div>
            
          </div>
          <div className="modal-job-details">
            <h3>Key Tasks:</h3>
            <ul>
              <li>Managing the Benelux' Dutch language social media accounts in terms of paid and organic advertising.</li>
              <li>Running the Benelux, US and Canadian partnership developments.</li>
              <li>Working on influencer outreach for the US market to increase SEO scores.</li>
              <li>Close collaboration with the global marketing campaign manager.</li>
              <li>Translating and localizing marketing campaigns to make them fit for the Benelux market.</li>
            </ul>
            <h3>Job Description:</h3>
            <p>SBG was the first step into my professional career. I started working here in 2018 as a marketing intern.<br/>
            At first, my tasks were limited to doing research and finding out more about our position in the market, and how to acquire certain metrics on the performance of our Benelux domains. <br/> 
            I started learning about Domain Authorities, Page Authorities, Bounce Rate and, more importantly, how to improve those metrics.</p>
            <br/>
            <p>Since SmartBuyGlasses is a small to medium-sized business, many of the "smaller" markets' marketing was run by interns. The Benelux market was not different.<br/>
            After I had acquianted myself with the market and had translated and posted some of our campaigns on my domain's socials, I started working on partnership developments. Mostly with coupon sites who would offer our products at a discount, for a small margin per sold product through their portal. According to the global partnership development manager, I had closed more deals in my first three weeks than all other Benelux interns had closed together. I then got asked to work on partnerships in the US and Canada.</p>
            <br/>
            <p>I'm proud to mention that I was also selected to help out in the global marketing campaign team. This was where I was hoping to be part of. We were in charge of deciding which type of offers and discounts to bring out onto the market on which days. I was happy to be able to bring my creativity to good use. We did campaigns for Mother's Day, King's Day, the 2018 World Cup and more.</p>
            <br/><br/><br/>
          </div>
        </Modal>
      )
    );
  }


