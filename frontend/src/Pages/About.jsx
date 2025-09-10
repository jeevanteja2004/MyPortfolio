import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Particles from "../Particles";
import "./About.css";


function About() {
    
    return (
        <div className="about-main-container" style={{backgroundColor: 'black',position: 'relative'}}>
             <div style={{ width: '100%', height: '100%', position: 'absolute',backgroundColor: 'black'}}>
                
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={1000}
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
            <h1 className="about-text" style={{position:"relative",marginBottom:"20px",zIndex:2000}}> My Education</h1>



            <div className="main-container-two" style={{zIndex:1000}}>
               
                <div className="one">
                    
                    <div class="notification block">
                        <div class="notiglow"></div>
                        <div class="notiborderglow"></div>
                        <div class="notititle">Vishnu institute of technology <span className="span-edu">2021-2025</span></div>
                        <div class="notibody">Bachelor of Technology <br></br>Electronics & Communication Engineering <br></br> (7.6 CGPA)</div>
                    </div>
                    <div class="notification block">
                        <div class="notiglow"></div>
                        <div class="notiborderglow"></div>
                        <div class="notititle">Sri Chaitanya junior college <span className="span-edu">2019-2021</span></div>
                        <div class="notibody">Intermediate <br></br> MPC <br></br> (72.4%)</div>
                    </div>
                    <div class="notification block">
                        <div class="notiglow"></div>
                        <div class="notiborderglow"></div>
                        <div class="notititle">Bhashyam high school <span className="span-edu">2018-2019</span></div>
                        <div class="notibody">Secondary School Of Certificate <br></br>(9.7 CGPA)
</div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default About;