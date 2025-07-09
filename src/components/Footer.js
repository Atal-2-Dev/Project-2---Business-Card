import React from "react";
import facebooklogo from  '../images/facebook 32 px.png'
import instagramlogo from  '../images/instagram 32 px.png'
import twiterlogo from  '../images/twitter 32 px.png'
import githublogo from  '../images/github 32 px.png'


export default function Footer (){
    return(
        <div>
            <ul className="footer-logos">
                <li><img src={facebooklogo} alt="" /></li>
                <li><img src={instagramlogo} alt="" /></li>
                <li><img src={twiterlogo} alt="" /></li>
                <li><img src={githublogo} alt="" /></li>
            </ul>
        </div>
    );
}