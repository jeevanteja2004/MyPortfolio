import React, { useState } from "react";
import Particles from "../Particles";

import "./Projects.css"
import Emojigame from "../assets/Emojigame.png"
import PasswordManager from "../assets/PasswordManager.png"

import jobbyApp from "../assets/jobbyApp.png"
import Resort from "../assets/Resort.png"
import moneyManager from "../assets/moneyManager.png"
import nxtTrandz from "../assets/nxtTrandz.png"
import nxtWatch from "../assets/nxtWatch.png"

import {useSelector} from "react-redux";
import { changeThemeSwitch } from "../store/Slices/themeSwitcher";

const projects = [

    { name: "Emoji Game", displayImg: Emojigame, livedemo: " https://emojigame334.ccbp.tech/ ", type: "frontend", techstack: ["HTML", "CSS", "React.js"] },
    { name: "Password Manager", displayImg: PasswordManager, livedemo: "https://passmanager334.ccbp.tech/", type: "frontend", techstack: ["HTML", "CSS", "React.js"] },
    { name: "Money Manager", displayImg: moneyManager, livedemo: "https://money334.ccbp.tech/", type: "frontend", techstack: ["HTML", "CSS", "React.js"] },
    { name: "NxtTrandz", displayImg: nxtTrandz, livedemo: "https://nxttrandz334.ccbp.tech/", type: "frontend", techstack: ["HTML", "CSS", "React.js", "API", "Authentication"] },
    { name: "JobbyApp", displayImg: jobbyApp, livedemo: "https://jobby334.ccbp.tech/login", type: "frontend", techstack: ["username:rahul", "password:rahul@2021", "HTML", "CSS", "React.js", "API", "Authentication"] },
    { name: "Resort Booking App", displayImg: Resort, livedemo: "https://holiday-resort-tau.vercel.app/", type: "fullstack", techstack: ["HTML", "CSS", "Next.js", "API", "Auth.js", "MongoDB", "NodeMailer"] },
    { name: "Nxt Watch", displayImg: nxtWatch, livedemo: "https://jeevan334watch.ccbp.tech", type: "frontend", techstack: ["HTML", "CSS", "React.js", "API", "Authentication"] }


]



function Projects() {
    const [project, setProject] = useState("frontend");
    const theme = useSelector((state) => state.darkorlight.isDark);
    return (
        <div className={`projects-main-container ${theme? "home-bg-dark" : "home-bg-light"}`} >
            <h1 className={`block ${theme ? "about-text-dark" : "about-text-light"}`} style={{ position: "relative", zIndex: 2000 }}>My Projects</h1>


            <div className="type-btns block x" >


                <button class="skills-type-button" onClick={() => setProject("frontend")}>
                    <span>FrontEnd </span>
                </button>
                <button class="skills-type-button" onClick={() => setProject("fullstack")}>
                    <span>FullStack </span>
                </button>



            </div>
            <div className="projects-display-container" style={{ zIndex: 1000 }}>
                {projects.filter(e => e.type === project).map(each => {
                    return (


                        <div class={`card-container ${["NxtTrandz","JobbyApp"].includes(each.name)&& `username-password`} block`}>
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
