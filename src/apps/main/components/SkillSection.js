import React from "react"
import Skill from "./Skill"
import css from "../images/icons/css.jpg"
import html from "../images/icons/html.jpg"
import javascript from "../images/icons/javascript.jpg"
import react from "../images/icons/react.jpg"
import photoshop from "../images/icons/photoshop.jpg"
import php from "../images/icons/php.jpg"
import sql from "../images/icons/sql.jpg"

export default function SkillSection() {
    return (
        <div className="flex">
            <div className="skillHeaderNameContainer">
                <span className="SkillHeaderName">Skills</span>
            </div>
            <section className="skillSectonContainer"> 
                <Skill image={html} name="HTML" />
                <Skill image={javascript} name="Javascript" />
                <Skill image={css} name="CSS" />
                <Skill image={react} name="React.JS" />                
                <Skill image={php} name="php" />
                <Skill image={sql} name="sql" />
                <Skill image={photoshop} name="Photoshop" />
            </section>
        </div>
    )
}