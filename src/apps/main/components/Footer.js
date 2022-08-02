import React from "react"
import linkedin from '../images/linkedin.png'
import whitegitlink from '../images/whitegitlink.png'


export default function Footer(props) {
    return (
        <div className="FooterContainer">
            <div className="footerInfoContainer">
                <span className="footerText">Peter Troutman &copy;2022</span>
                <div className="footerSocialContainer">
                    <a href="https://www.linkedin.com/in/peter-troutman-b01715170" target="_blank">
                        <img className="SiteNavBarImg" src={linkedin} alt="" />
                    </a>
                    <a href="https://github.com/Perzeph" target="_blank">
                        <img className="SiteNavBarImg" src={whitegitlink} alt="" />
                    </a>   
                </div>
            </div>
        </div>
    )
}