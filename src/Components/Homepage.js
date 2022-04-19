import Navbar from "../Components/Navbar";
import Welcome from "../Components/Welcome";
import Workexp from "../Components/Workexp";
import React from 'react';
import Projects from "./Projects";
import Footer from "./Footer";


export default function Homepage() {
    return (
        <>
            <Navbar />
            <Welcome />
            <Workexp />
            <Projects />
            <Footer />
        </>
    )
}
