import React from "react";
import Modal from "../Modal";
import KedgeLogo from "../../Assets/Images/accenture.png";

export default function KedgeModal(props) {
    let params = new URLSearchParams(props.location.search);

    return (
      params.get("accenture") && (
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
              <img src={KedgeLogo} alt="Kedge Logo" />
            </div>
            <div className="job-information">
              <div className="modal-job-title">Web Development Engineer</div>
              <div className="modal-job-location">Heerlen, the Netherlands</div>
              <div className="modal-job-duration">December, 2021 - Present</div>
            </div>
            <div className="job-keywords">
              <p>Keywords:</p>
              <ul>
                <li>Application Management</li>
                <li>DevOps</li>
                <li>Database Management</li>
                <li>API Management</li>
              </ul>
            </div>
            
          </div>
          <div className="modal-job-details">
            <h3>Key Tasks:</h3>
            <ul>
              <li>Renewing SSL certificates for our clients' API Gateways to ensure their data can flow into the applications seamlessly.</li>
              <li>Checking daily whether our applications' functionality is fully up and running, to ensure that our users can do their work properly.</li>
              <li>Migrating several applications and API layers from our clients' on premises servers to Azure.</li>
              <li>Writing scripts in a custom language to manage our client's database and servers. </li>
            </ul>
            <h3>Job Description:</h3>
            <p>I started at Accenture as a Web Development Engineer in December, 2021. After onboarding, I was asked to join a project in Application Management, since they had just lost a team member. This is where I was introduced to working with SQL, Server Maintenance, and Database Management.
              <br/> 
              I work with things that are new to me every day, which is what makes the job rather interesting (even if it is quite frustrating at times).
            </p>
            <br/>
            <p>Later on, I got added to a second team as part of a completely different project. We mostly manage our clients API layers and gateways, assisted migrating their applications from their on premises servers to Azure, and support them whenever there are outages/errors in their applications. Plus, they are a German client so I get to practice a bit of German on the side.</p>
            <br/>
            <p>As you might be able to tell from my previous experience and the description of my role in Accenture, it was not necessarily what I had signed up for. However, I try to make the most of it and learn as much as possible from my time at Accenture by doing new things.</p>
            <br/><br/><br/>
          </div>
        </Modal>
      )
    );
  }


