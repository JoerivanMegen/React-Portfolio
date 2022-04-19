import React, {useState} from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [welcomed, setWelcomed] = useState(false);
    
    //Burger Toggle Mobile
    const navSlide = () => {
        const burger = document.querySelector('.burger')
        const nav = document.querySelector('.nav-links')
            
            //burger to cross toggle
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active')
    }

    const changeScroll = () => {
        if(window.scrollY >= 55){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', changeScroll)

    const backToTop = () =>{
        window.scrollTo(0,0)
    }

    const changeWelcome = () => {
        if (window.scrollY >= 450){
            setWelcomed(true)
        } else {
            setWelcomed(false)
        }
    }
    window.addEventListener('scroll', changeWelcome)
      


    return (
        <nav className={scrolled ? "navbar scroll" : "navbar"}>
                <h2 className="logo-holder">Joeri van Megen</h2>
                <ul id="nav-links" className="nav-links">
                    {welcomed ? <li onClick={backToTop} style={{cursor: 'pointer'}} >Back to Top</li> : <li>Welcome!</li>}
                    <a href="#CV"><li>Work<br/>Experience</li></a>
                    <a href="#Projects"><li>Projects</li></a>
                </ul>
                <div className="burger" onClick={navSlide}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
        </nav>
    )
}


export default Navbar
