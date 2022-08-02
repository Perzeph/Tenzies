import React from "react"
import gitLinkImg from '../images/gitlink.png'


export default function AppInfo(props) {
    return (
        <div className="AppSectionContainer"> 
            <div className="skillHeaderNameContainer">
                <span className="SkillHeaderName">App #{props.number}</span>
            </div>
            <div className="AppInfoContainer">
                <div className="flex">
                    <a href={props.gitlink} target="_blank">
                        <img className="gitLinkImage" src={gitLinkImg} />
                    </a>
                    <span className="AppName">{props.name}</span>
                </div>
                <div className="AppDescription">
                    <span className="AppDescriptionText">
                       {props.description} 
                    </span>
                </div>
            </div>
        </div>
    )
}