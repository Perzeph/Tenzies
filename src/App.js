import React from "react"
import { Routes, Route} from "react-router-dom";
import SiteNavBar from "./apps/main/components/SiteNavBar"
import SiteHeader from "./apps/main/components/SiteHeader"
import Resume from "./apps/main/Resume"
import Contact from "./apps/main/components/Contact";
import Footer from "./apps/main/components/Footer";


export default function App() {
      
    return (
        <main>
           <SiteHeader />
           <SiteNavBar /> 
           <Routes>
                <Route exact path="/" element={<Resume />} />
                <Route  path="/contact" element={<Contact />} />                  
            </Routes>            
        </main>
    )
}