import React,{useRef,useEffect}  from 'react';
import "./Navbar.css"
import Logo from "./Logo.js";
import CartIcon from "./CartIcon.js"

function Navbar() {



    useEffect(()=>{
        let hamburgerBarTop=document.querySelector(".bar-top");
        let hamburgerBarBottom=document.querySelector(".bar-bottom");
        let hamburgerButton=document.querySelector(".hamburger");
        let bottomNavbar=document.querySelector(".bottom-navbar");

        hamburgerButton.addEventListener("click",()=>{
            hamburgerBarTop.classList.toggle("open");
            hamburgerBarBottom.classList.toggle("open");
            bottomNavbar.classList.toggle("open");

        });

    },[])

    

    return (
        <nav className="navbar">
            <div className="top-navbar">
                <div className="left-navbar">
                    <div className="logo-container">
                        <Logo></Logo>
                    </div>
                    

                    <ul className="menu-options">

                        <li className="option text-option"><a href="#about">about</a></li>
                        <li className="option text-option"><a href="#contact">contact</a></li>
                    </ul>
                    
                </div>
                <button className="hamburger">
                    <div className="bar-top"></div>
                    <div className="bar-mid"></div>
                    <div className="bar-bottom"></div>
                </button>

                <div className="cart-icon-container">
                    <CartIcon></CartIcon>
                </div>

                

            </div>

            <div className="bottom-navbar">
                <ul className="hamburger-menu-options">
                    <li className="option text-option"><a href="#about">about</a></li>
                    <li className="option text-option"><a href="#contact">contact</a></li>
                </ul>

            </div>
            
            

        

           
            
            
           
            
        </nav>
    )
}

export default Navbar
