import React, { useState } from "react";
import './Skills.css';
import ProgressWithLabel from "../Components/ProgressWithLabel"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import LogoLoop from '../Components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import Particles from "../Particles";

const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26", type: "front", value: 70 },
    { icon: <IoLogoCss3 />, name: "CSS3", color: "#1572B6", type: "front", value: 70 },
    { icon: <FaSquareJs />, name: "JavaScript", color: "#F7DF1E", type: "front", value: 70 },
    { icon: <FaReact />, name: "React", color: "#61DAFB", type: "front", value: 70 },
    { icon: <RiNextjsLine />, name: "Next.js", color: "#000000", type: "front", value: 40 },
    { icon: <TbBrandRedux />, name: "Redux", color: "#764ABC", type: "front", value: 40 },
    { icon: <FaPython />, name: "Python", color: "#3776AB", type: "back", value: 60 },
    { icon: <FaNode />, name: "Node.js", color: "#3C873A", type: "back", value: 70 },
    { icon: <SiSqlite />, name: "SQLite", color: "#003B57", type: "back", value: 80 },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248", type: "back", value: 50 },
    { icon: <FiFigma />, name: "Figma", color: "#F24E1E", type: "tool", value: 50 },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032", type: "tool", value: 60 },
    { icon: <FaGithub />, name: "GitHub", color: "#181717", type: "tool", value: 60 },
];

const techLogos = [
    {node :<FaHtml5 />,title:"HTML5",href:"https://react.dev"},
     {node :<IoLogoCss3 />,title:"css",href:"https://react.dev"},
      {node :<FaSquareJs />,title:"js",href:"https://react.dev"},
       {node :<FaReact />,title:"react",href:"https://react.dev"},
        {node :<RiNextjsLine />,title:"next",href:"https://react.dev"},
         {node :<TbBrandRedux />,title:"redux",href:"https://react.dev"},
    { node: <FaPython />, title: "python", href: "https://react.dev" },
    { node: <FaNode />, title: "node", href: "https://nextjs.org" },
    { node: <SiSqlite />, title: "sql", href: "https://react.dev" },
    { node: <SiMongodb />, title: "mdb", href: "https://react.dev" },
    { node: <FiFigma />, title: "figma", href: "https://react.dev" },
    { node: <FaGitAlt />, title: "git", href: "https://react.dev" },
    { node: <FaGithub />, title: "github", href: "https://react.dev" },
   ,
];

// Alternative with image sources
const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];
function Skills() {
    const [type, setType] = useState("front")


    return (
        <div className="skills-main-container">
             <div style={{ width: '100%',height: '100vh', position:"absolute", backgroundColor: 'black',zIndex:0}}>
                
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
            <h1 className="about-text block" style={{ position: "relative", zIndex: 2000 }}>My Skills</h1>

            <div style={{position: "relative"}} className="skills-section">

                <div className="type-btns block">


                    <button class="skills-type-button" onClick={() => setType("front")}>
                        <span>FrontEnd</span>
                    </button>
                    <button class="skills-type-button" onClick={() => setType("back")}>
                        <span>BackEnd</span>
                    </button>
                    <button class="skills-type-button" onClick={() => setType("tool")}>
                        <span>Tools</span>
                    </button>


                </div>
                <div className="skills-container">
                    {skills.filter(eachitem => eachitem.type === type).map(each => {
                        return (
                            <div >
                                <div className="skills-each-card block">
                                    <div class="card">
                                        <div class="img"><i style={{ fontSize: "40px" }}>{each.icon}</i></div>
                                        <div class="textBox">
                                            <div class="textContent">
                                                <p class="h1">{each.name}</p>

                                            </div>
                                            <p class="p"><ProgressWithLabel value={each.value} /></p>
                                            <div>
                                            </div></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div style={{ height: '100px', position: 'relative', overflow: 'hidden' ,width:"100%"}}>
                    <LogoLoop
                        logos={techLogos}
                        speed={180}
                        direction="left"
                        logoHeight={48}
                        gap={30}


                        
                        ariaLabel="Technology partners"
                        className="logo-scroll"
                    />
                </div>

            </div>

        </div>
    )
}
export default Skills;