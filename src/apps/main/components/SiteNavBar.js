import React from "react"
import { Link } from "react-router-dom";
import linkedin from '../images/linkedin.png'
import whitegitlink from '../images/whitegitlink.png'



export default function SiteNavBar(props) {
    return (
        <div className="SiteNavBarContainer"> 
            <div className="NavLinksContainer">
                <Link className="SiteNavBarLink" to="/">
                    Home  
                </Link>                
                <Link className="SiteNavBarLink" to="/contact">
                    Contact     
                </Link>
                <a href="https://www.linkedin.com/in/peter-troutman-b01715170" target="_blank">
                    <img className="SiteNavBarImg" src={linkedin} alt="" />
                </a>
                <a href="https://github.com/Perzeph" target="_blank">
                    <img className="SiteNavBarImg" src={whitegitlink} alt="" />
                </a>   
            </div>
        </div>
    )
}