import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css"
import Particles from "../Particles";
import contactImg from "../assets/contactImg.svg";
import meee from "../assets/meee.png"
function Contact({isPersonSignIn}) {
    console.log("isuser",isPersonSignIn)
   const navigate = useNavigate();
    return (
        <div className="contact-main-container">
            <div style={{ width: '100%', height: '100vh', position: "absolute", backgroundColor: 'black', zIndex: 0 }}>

                <Particles
                    particleColors={['#fffdfdff', '#ffffff']}
                    particleCount={10000}
                    particleSpread={30}
                    speed={0.2}
                    particleBaseSize={90}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                    className="hide-particles"
                />
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={5000}
                    particleSpread={30}
                    speed={0.2}
                    particleBaseSize={90}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                    className="hide-particles-two"
                />
            </div>
            <h1 className="about-text block" style={{ position: "relative", zIndex: 2000 }}>Let's Connect</h1>
            <div className="form-with-img" style={{ position: "relative", zIndex: 2000 }}>
                <img src={contactImg} style={{ zIndex: 3000, position: "relative" }} className="image-zoom" />
                <form className="form block">
                    <div  className="input-name">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="input-name-placeholder" placeholder="Enter your Name"/>
                    </div>
                    <div  className="input-name">
                    <label htmlFor="Email">Email</label>
                    <input type="text" id="Email" className="input-name-placeholder" placeholder="Enter your Email"/>
                    </div>
                    <div  className="text-area">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" id="description" className="text" placeholder="write...."/>
                    </div>
                    {isPersonSignIn?
                    <button type="submit" className="form-btn">Submit</button>:<button type="button" onClick={() => navigate("/login")} className="form-btn">Login To Submit</button>}
                </form>
            </div>
             <p className="jj">© 2025 Jeevan Teja. All Rights Reserved.</p>
        </div>
    )
}

export default Contact;