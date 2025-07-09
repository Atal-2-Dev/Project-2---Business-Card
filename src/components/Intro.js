import React from "react";
import DP from '../images/Display Picture.png'
import emaillogo from '../images/email icon 24 px.png'
import linkedinlogo from '../images/linkedin icon 24 px.png'

export default function Intro (){
    return(
        <div>
            <ul className="intro-contents">
                <li><img src={DP} alt="profile picture" className="intro-pic"/></li>
                <li className="intro-name">Atal Dev Dhakal</li>
                <li className="intro-job">Frontend Developer</li>
                <li className="intro-website">ataldevdhakal.com</li>
            </ul>
            <ul className="intro-button">
                <ul className="intro-button-email">
                    <li className="intro-button-email-logo"> <img src={emaillogo} alt="logo" /></li>
                    <li className="intro-button-email-text">Email</li>
                </ul>
                <ul className="intro-button-linkedin">
                    <li className="intro-button-linkedin-logo"> <img src={linkedinlogo} alt="logo" /></li>
                    <li className="intro-button-linkedin-text">LinkedIn</li>
                </ul>
            </ul>
        </div>
    );
}