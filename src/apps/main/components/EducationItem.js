import React from "react"

export default function EducationItem(props) {
    return (
        <div className="educationItemContainer">
                <img className="educationImg" src={props.image} alt="" />
                <span className="educationText" >{props.name}</span>
        </div>
    )
}