import React, {useEffect, useState} from 'react';
import "./Banner.css";

function Banner() {
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setWindowWidth(window.innerWidth);
        })
    },[])

    return (
        <section className="banner">

            <div className="banner-delorean-container">
                <video autoPlay loop muted playsInline >
                    <source src="images/lava-lamp-close-up.mp4" type="video/mp4"/>
                    
                </video>
            </div>
            
            <img className="banner-delorean" src={windowWidth>450?"images/RETRO REDUX Banner Delorean.png":"images/mobile retro delorean.png"} alt="" />
            <div className="banner-gradient">

            </div>
            

            


            

        </section>
    )
}

export default Banner
