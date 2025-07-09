import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";


export default function App (){
    return(
        <div className="entire-content">
            <Intro/>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    );
}