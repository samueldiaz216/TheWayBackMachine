import React from 'react'
import "./Logo.css"

function Logo() {
    return (
        <div className="logo-and-video-container">
            <video autoPlay loop muted playsInline>
                <source src="images/lava-lamp-close-up.mp4" type="video/mp4"/>
            </video>

            <div className="logo-box">
                <a href="#banner"><h1 className="logo">RETRO REDUX</h1></a>
            </div>
        </div>
        
    )
}

export default Logo
