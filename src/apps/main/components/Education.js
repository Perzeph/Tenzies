import React from "react"
import clemson from '../images/clemson.png'
import cpa from '../images/cpa.png'
import note from '../images/note.png'
import EducationItem from "./EducationItem"




export default function Education() {
    return (
        <div className="AppSectionContainer"> 
            <div className="skillHeaderNameContainer">
                <span className="SkillHeaderName">Education</span>
            </div>
            <div className="educationSection">
                <EducationItem image={clemson} name="Clemson University, BS" />
                <EducationItem image={cpa} name="Certified Public Accountant [not in public practice]" />
                
                

            </div>
        </div>
        
    )
}