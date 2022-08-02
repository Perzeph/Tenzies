import React from "react"
import profile_web from '../images/profile_web.png'
import background from '../images/background.png'
import resume from '../resume.pdf'


export default function ResumeHeader() {
    return (
        <header className="mainHeader backgroundImage" style={{ 
            backgroundImage: `url(${background})`
          }}>
            <img className="profile_img" src={profile_web} />
            <div className="profileInfo">
                <div className="headerInfoContainer">
                    <span className="profileName">Peter Troutman</span>
                    <span className="workTitle">React.JS Developer</span>
                </div>
                <div className="headerInfoContainer">
                    <span className="profileDescription">
                        Welcome to my simple resume website built in React! Here you will find a copy of my actual <a href={resume} target='_blank'>resume</a>, and live apps with a description and GitHub link.
                    </span>
                </div>
            </div>
        </header>
    )
}