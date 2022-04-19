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
              <div className="modal-job-title">Account Strategist Onboarding EMEA - Benelux</div>
              <div className="modal-job-location">Dublin, Ireland</div>
              <div className="modal-job-duration">January, 2020 - April, 2021</div>
            </div>
            <div className="job-keywords">
              <p>Keywords:</p>
              <ul>
                <li>Proactivity</li>
                <li>Communication</li>
                <li>Autonomy</li>
                <li>Innovation</li>
              </ul>
            </div>
            
          </div>
          <div className="modal-job-details">
            <h3>Key Tasks:</h3>
            <ul>
              <li>Optimising Indeed's organic clients' campaigns to increase their ROI in recruitment for the Benelux market.</li>
              <li>Researching keywords, CPC (cost-per-click) prices, the job market and competitors to help give clients the best possible advise to improve their recruitment campaigns.</li>
              <li>Communicate with my book of business to ensure a positive experience with Indeed's products.</li>
              <li>Drive operational excellence through the identification and execution of opportunities that create efficiency, revenue and increase customer satisfaction.</li>
              <li>Collaborate cross-functionally (with Finance, Product, Service teams) to refine recommendations and develop joint action plans.</li>
            </ul>
            <h3>Job Description:</h3>
            <p>This Senior Sales Strategist position sits in our Global CS and Sales Strategy team which focuses on driving innovation in products, tools and processes that help our Sales teams succeed. We collaborate with functions across Indeed, including Sales, Product, Finance, Client Services, and Marketing to identify strategies for growth and efficiency. We are excited to help transform the recruitment industry by improving lives around the world, one job at a time.</p>
            <br/>
            <p>The Senior Sales Strategist works closely with stakeholders across functions and global regions to help lead and execute strategic initiatives that boost revenue, retain drive operational scale and improve efficiency for continuous exponential growth. Indeed employees are united by one common mission: they help people get jobs. The company’s success is due to the fact that their employees are laser-focused, collaborative, passionate, data-driven and committed to results.</p>
            <br/><br/><br/>
          </div>
        </Modal>
      )
    );
  }


