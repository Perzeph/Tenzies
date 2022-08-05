import React from "react"
import SkillSection from "./components/SkillSection"
import AppInfo from "./components/AppInfo"
import Tenzies from "../tenzies/Tenzies"
import MemeApp from "../meme/MemeApp"
import Education from "./components/Education"
import Footer from "./components/Footer"
import profile_web from './images/profile_web.png'
import background from './images/background.png'


export default function Resume() {
    return (
        <div>            
            <SkillSection />

            <AppInfo 
                number="1"
                gitlink="https://github.com/Perzeph/ResumeSite"
                name="This Website!"
                description="This website is built in React. The contact information section is split into a separate page to demonstrate use of React Router. A media query is used to rearrange the top section with CSS grid template areas if the screen size becomes narrow."
            />

            <AppInfo 
                number="2"
                gitlink="https://github.com/Perzeph/Tenzies"
                name="Tenzies"
                description="State is managed in the App component where an array holds a boolean for whether a die is held or not. If a die is held it is not changed in the dice array upon a new roll. A held die is also conditionally rendered a different color in the Die component. Changes made to the dice array monitor game process via useEffect."
            />
           <Tenzies />

           <AppInfo 
                number="3"
                gitlink="https://github.com/Perzeph/MemeGenerator"
                name="Meme Generator"
                description="An array of images is retreived from an API. Form information is collected and updated in state where it is then displayed over a randomly selected image. "
            />
           <MemeApp  /> 

            <Education />

            <Footer />
        </div>
    )
}