import React from "react"

export default function Skill(props) {
    return (
        <div className="skillContainer"> 
            <img className="skillImage" src={props.image}  />
            <span className="skillName" >{props.name}</span>
        </div>
    )
}