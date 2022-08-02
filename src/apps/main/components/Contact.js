import React from "react"

import phone from '../images/phone.png'
import email from '../images/email.png'

export default function Contact(props) {
    return (
        <div className="contactContainer"> 

            <div className="flex column">
                <div className="contactElementContainer">
                    <img className="contactImgIcon" src={phone} alt="" />
                    <div className="flex">                    
                        <a className="contactItem" href="tel:864-616-5884">864-616-5884</a>
                    </div>
                </div>

                <div className="contactElementContainer">
                    <img className="contactImgIcon" src={email} alt="" />
                    <div className="flex">
                        <a  className="contactItem" href = "mailto: troutman.peter@gmail.com">
                            troutman.peter@gmail.com
                        </a>
                    </div>
                </div>

            </div>
            
            


        </div>
    )
}