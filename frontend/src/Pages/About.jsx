import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Particles from "../Particles";
import "./About.css";
import {useSelector} from "react-redux";
import { changeThemeSwitch } from "../store/Slices/themeSwitcher";

function About() {
    const theme = useSelector((state) => state.darkorlight.isDark);
    return (
        <div className={`about-main-container ${theme ? "home-bg-dark" : "home-bg-light"}`} style={{position: 'relative'}}>
            
        
            <h1 className={`block ${theme ? "about-text-dark" : "about-text-light"}`} style={{position:"relative",marginBottom:"20px",zIndex:2000}}> My Education</h1>



            <div className="main-container-two" style={{zIndex:1000}}>
               
                <div className="one">
                    
                    <div class={`notification block ${!theme&&"notification-light"}`}>
                        <div class="notiglow"></div>
                        <div class="notiborderglow"></div>
                        <div class={`notititle ${!theme&&"notititle-light"}`}>Vishnu institute of technology <span className="span-edu">2021-2025</span></div>
                        <div class="notibody">Bachelor of Technology <br></br>Electronics & Communication Engineering <br></br> (7.6 CGPA)</div>
                    </div>
                    <div class={`notification block ${!theme&&"notification-light"}`}>
                        <div class="notiglow"></div>
                        <div class="notiborderglow"></div>
                        <div class={`notititle ${!theme&&"notititle-light"}`}>Sri Chaitanya junior college <span className="span-edu">2019-2021</span></div>
                        <div class="notibody">Intermediate <br></br> MPC <br></br> (72.4%)</div>
                    </div>
                    <div class={`notification block ${!theme&&"notification-light"}`}>
                        <div class="notiglow"></div>
                        <div class="notiborderglow"></div>
                        <div class={`notititle ${!theme&&"notititle-light"}`}>Bhashyam high school <span className="span-edu">2018-2019</span></div>
                        <div class="notibody">Secondary School Of Certificate <br></br>(9.7 CGPA)
</div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default About;