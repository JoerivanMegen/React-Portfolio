import React from 'react';
import Rolex from '../Assets/Images/rolex.jpg';

export default function Stopwatch() {
    //variables
    let centiSeconds = 0;
    let seconds = 0;
    let minutes = 0;

    //define var to hold display value (the first out of two zeroes.)
    let displayCenti = 0;
    let displaySeconds = 0;
    let displayMinutes = 0;

    let interval = null;
    let status = "stopped";

    //Stopwatch-logic (when to increment value)
    function stopWatch() {
        //base principle of stopwatch
        centiSeconds++;
        //when to increment minutes
        if (centiSeconds / 100 === 1) {
            centiSeconds = 0;
            seconds++;
            if (seconds / 60 === 1) {
                seconds = 0;
                minutes++;
            }
        }
        // add extra zero in front of number in case there is only one digit.
        if (centiSeconds < 10) {
            displayCenti = "0" + centiSeconds.toString();
        } else {
            displayCenti = centiSeconds;
        }

        if (seconds < 10) {
            displaySeconds = "0" + seconds.toString();
        } else {
            displaySeconds = seconds;
        }

        if (minutes < 10) {
            displayMinutes = "0" + minutes.toString();
        } else {
            displayMinutes = minutes;
        }

        //display updated time
        document.querySelector(".centiseconds").innerHTML = displayCenti;
        document.querySelector(".seconds").innerHTML = displaySeconds;
        document.querySelector(".minutes").innerHTML = displayMinutes;

    }
    //How many times will "stopWatch" run? every 10 milliseconds (10 milliseconds - 1 centisecond). 


    function startStopwatch() {
        if (status === "stopped") {
            interval = window.setInterval(stopWatch, (10 % 1000));
            document.getElementsByClassName("start");
            status = "started";
        }
    }
    function stopStopwatch() {
        if (status === "started") {
            window.clearInterval(interval);
            document.getElementsByClassName("stop");
            status = "stopped";
        }
    }


    function reset() {
        window.clearInterval(interval);
        centiSeconds = 0;
        seconds = 0;
        minutes = 0;
        document.querySelector(".centiseconds").innerHTML = "00";
        document.querySelector(".seconds").innerHTML = "00";
        document.querySelector(".minutes").innerHTML = "00";
        status = "stopped";
    }

    return (
        <div className="stopwatch">
            <div className="inside-stopwatch">
                <div className="title"><img src={Rolex} alt="" /></div>
                <div className="timer"><p>
                    <span className="minutes">
                        00
                </span>:<span className="seconds">
                        00
                </span>:<span className="centiseconds">
                        00
                </span></p>
                </div>
                <div className="knoppen-container">
                    <button onClick={startStopwatch} className="button start"><span className="if-small">START</span></button>
                    <button onClick={stopStopwatch} className="button stop"><span className="if-small">STOP</span></button>
                    <button onClick={reset} className="button reset"><span className="if-small">RESET</span></button>
                </div>
            </div>
        </div>
    )
}
