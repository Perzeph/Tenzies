import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"


export default function MemeApp() {
    return (
        <div className="memeMainContainer">
            <Header />
            <Meme />
        </div>
    )
}
