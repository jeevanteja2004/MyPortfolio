import React, { useState } from "react";
import Particles from "../Particles";

import "./Projects.css"
import Emojigame from "../assets/Emojigame.png"
import PasswordManager from "../assets/PasswordManager.png"
import coinToss from "../assets/coinToss.png"
import jobbyApp from "../assets/jobbyApp.png"
import Resort from "../assets/Resort.png"
import moneyManager from "../assets/moneyManager.png"
import nxtTrandz from "../assets/nxtTrandz.png"
import nxtWatch from "../assets/nxtWatch.png"
import speedtyping from "../assets/speedtyping.png"

const projects = [

    { name: "Emoji Game", displayImg: Emojigame, livedemo: " https://emojigame334.ccbp.tech/ ", type: "frontend", techstack: ["HTML", "CSS", "React.js"] },
    { name: "Password Manager", displayImg: PasswordManager, livedemo: "https://passmanager334.ccbp.tech/", type: "frontend", techstack: ["HTML", "CSS", "React.js"] },
    { name: "Money Manager", displayImg: moneyManager, livedemo: "https://money334.ccbp.tech/", type: "frontend", techstack: ["HTML", "CSS", "React.js"] },
    { name: "NxtTrandz", displayImg: nxtTrandz, livedemo: "", type: "frontend", techstack: ["HTML", "CSS", "React.js", "API", "Authentication"] },
    { name: "JobbyApp", displayImg: jobbyApp, livedemo: "https://jobby334.ccbp.tech/login", type: "frontend", techstack: ["username:rahul", "password:rahul@2021", "HTML", "CSS", "React.js", "API", "Authentication"] },
    { name: "Resort Booking App", displayImg: Resort, livedemo: "https://holiday-resort-tau.vercel.app/", type: "fullstack", techstack: ["HTML", "CSS", "Next.js", "API", "Auth.js", "MongoDB", "NodeMailer"] },
    { name: "Nxt Watch", displayImg: nxtWatch, livedemo: "https://jeevan334watch.ccbp.tech", type: "frontend", techstack: ["HTML", "CSS", "React.js", "API", "Authentication"] }


]



function Projects() {
    const [project, setProject] = useState("frontend");

    return (
        <div className="projects-main-container">
            <div style={{ width: '100%', height: '100vh', position: "absolute", backgroundColor: 'black', zIndex: 0 }}>

                <Particles
                    particleColors={['#ffffff', '#ffffff']}
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
            <h1 className="about-text block" style={{ position: "relative", zIndex: 2000 }}>My Projects</h1>


            <div className="type-btns block x" >


                <button class="skills-type-button" onClick={() => setProject("frontend")}>
                    <span>FrontEnd </span>
                </button>
                <button class="skills-type-button" onClick={() => setProject("fullstack")}>
                    <span>FullStack </span>
                </button>



            </div>
            <div className="projects-display-container" style={{ zIndex: 10000 }}>
                {projects.filter(e => e.type === project).map(each => {
                    return (


                        <div class={`card-container ${["NxtTrandz","JobbyApp"].includes(each.name)&& `username-password`}`}>
                            <div class="image_container">

                                <img src={each.displayImg} style={{ height: "100%", width: "100%" }} />

                            </div>

                            <button class="cart-button ">
                                <a href={each.livedemo}>Live Demo</a>
                            </button>
                            {["NxtTrandz","JobbyApp"].includes(each.name) && (
                                <p style={{color:"white"}}>
                                    username: rahul
                                    <br />
                                    password: rahul@2021
                                </p>
                            )}

                        </div>


                    )
                })}

            </div>
        </div>
    )
}
export default Projects