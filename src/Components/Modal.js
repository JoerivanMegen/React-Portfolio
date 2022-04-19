import React from "react";
import { createPortal } from "react-dom";


export default function Modal(props) {
    return createPortal(
        <>
        <div className="modal-container">
            <div className="modal-backdrop" onClick={props.onClick}>
                <div className="exit-mobile" onClick={props.onClick}>
                    <div className="close-one"></div>
                    <div className="close-two"></div>
                </div>
            </div>
            <div className="modal-box">
                {props.children}
            </div>
        </div>
        </>,
      document.getElementById("modal_root"),
    );
}