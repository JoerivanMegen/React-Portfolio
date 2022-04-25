import React from "react";
import Modal from "../Modal";
import ZuydLogo from "../../Assets/Images/Zuyd-Hogeschool.png";

export default function ZuydModal(props) {
    let params = new URLSearchParams(props.location.search);

    return (
      params.get("zuyd") && (
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
              <img src={ZuydLogo} alt="Indeed Logo" 
              style={{ width: 70 + "%", height: "auto" }} />
            </div>
            <div className="job-information">
              <div className="modal-job-title">European Studies <br/> Specialisation in Marketing</div>
              <div className="modal-job-location">Maastricht, the Netherlands</div>
              <div className="modal-job-duration">September, 2013 - July, 2018</div>
            </div>
            <div className="job-keywords">
              <p>Keywords:</p>
              <ul>
                <li>Languages</li>
                <li>European Law and Culture</li>
                <li>Marketing</li>
              </ul>
            </div>
            
          </div>
          <div className="modal-job-details">
            <h3>Special Mentions:</h3>
            <ul>
              <li>In 2016, I went on exchange for a semester at Kedge Business School in Marseille, France, where I specialised in international marketing.</li>
              <li>In 2018, I took the opportunity to do an internship in online marketing in Turin, Italy at SmartBuyGlasses.</li>
              <li>I was one of the only ones in my year who passed their thesis first try. I wrote mine on the influence of language on international marketing. </li>
            </ul>
            <h3>More Information:</h3>
            <p>The European Studies degree was intriguing to me, because I have a very strong interest for languages and cultures. Besides that, I was interested in business but also in the public domain, but wasn't sure yet which one I wanted to go for.
            Therefore, ES seemed to be the perfect option. The languages that I chose where French and Spanish. I didn't choose German since I already had some knowledge of the language from growing up just at the border of Germany.</p>
            <br/>
            <p>After the first two years, I decided to specialise in international marketing, as my interest moved more towards business than it did to the public sector. </p>
            <br/>
            <p>I wrote my thesis on the influence of language on international marketing, focusing on the Dutch market compared to the Irish market. I then tried to find out why certain brands would sell the same products with different names depending on the market, with brands such as the Laughing Cow (La Vache Qui Rit in NL), Galaxy (Dove in NL) and Aero (Bros in NL). As you can probably tell from the mentioned brands, I stayed with food products!</p>
            <br/><br/><br/>
          </div>
        </Modal>
      )
    );
  }


