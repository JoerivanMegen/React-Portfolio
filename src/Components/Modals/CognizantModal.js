import React from "react";
import Modal from "../Modal";
import CognizantLogo from "../../Assets/Images/cognizant-logo.png";

export default function CognizantModal(props) {
    let params = new URLSearchParams(props.location.search);

    return (
      params.get("cognizant") && (
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
              <img src={CognizantLogo} alt="Cognizant Logo" />
            </div>
            <div className="job-information">
              <div className="modal-job-title">Google Ads Specialist</div>
              <div className="modal-job-location">Dublin, Ireland</div>
              <div className="modal-job-duration">October, 2018 - January, 2020</div>
            </div>
            <div className="job-keywords">
              <p>Keywords:</p>
              <ul>
                <li>Analytics</li>
                <li>Communication</li>
                <li>Automation</li>
                <li>Efficiency</li>
              </ul>
            </div>
            
          </div>
          <div className="modal-job-details">
            <h3>Key Tasks:</h3>
            <ul>
              <li>Implement optimization solutions: build campaigns for high value advertising customers</li>
              <li>Researching keywords, CPC (cost-per-click) prices, and competitors to help clients get as much return on their advertising endeavours as possible.</li>
              <li>Drive operational excellence through the identification and execution of opportunities that create efficiency, revenue and increase customer satisfaction.</li>
              <li>Collaborate cross-departmentally (with Google's Account Managers and AI teams) to refine recommendations and develop joint action plans.</li>
            </ul>
            <h3>Job Description:</h3>
            <p>The main purpose of the role was to act as a Subject Matter Expert for AdWords campaign optimization for
              high-value clients in the Benelux market.</p>
            <br/>
            <p>
              I was a part of a rapidly growing, multilingual, client-facing team. We were working onsite with and
              alongside internal teams for Google to respond to client leads and assist in the
              success of the Google Ads project. After two months of extensive training, I got to jump into Google's high-value clients to help optimize their campaigns, to improve their ROI from their Google Ads endeavours.</p>
            <br/><br/><br/>
          </div>
        </Modal>
      )
    );
  }


