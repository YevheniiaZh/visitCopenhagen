import React from "react";

function ContactUs(){
    return(
        <div > 
        <div className="container">
            <h2>Keep discovering...</h2>
            </div>
            <div className="container">
            <div className="place-card">
            <a href ="https://www.wonderfulcopenhagen.com/" target={"_blank"}>Wonderful Copenhagen</a>
            </div>
            <div className="place-card">
            <a href ="https://copenhagencard.com/" target={"_blank"}>Copenhagen Card</a>
            </div>
            <div className="place-card">
            <a href ="https://www.wonderfulcopenhagen.com/cruise" target={"_blank"}> Cruise Copenhagen</a>
            </div>
            <div className="place-card">
            <a href ="https://www.visitdenmark.com/" target={"_blank"}>Visit Denmark</a>
            </div>
            
            <img className="place-card" src="https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Denmark.jpg?h=fa1c963e&itok=PwmxFBPb" alt="denmark" width="600px"/>
            
            </div>
        </div>
    )
}

export default ContactUs;