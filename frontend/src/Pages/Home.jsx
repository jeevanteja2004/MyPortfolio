import React from "react";
import { useRef, useEffect  } from "react";

import react from "../assets/react.svg"
import meee from "../assets/meee.png"
import BlurText from "../BlurText";
import SplitText from "../SplitText";

import Particles from "../Particles";
import ShinyText from '../ShinyText';
import { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import { UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Footer from "./Footer";

function Home() {
    const [toggleHambarger, setToggleHambarger] = useState(true);
    const [isPersonSignedIn,setIsPersonSignedIn]=useState();
    const hambergerIconFunction = () => {
        setToggleHambarger(!toggleHambarger)
    }

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const navigate = useNavigate();
    const { isSignedIn, user } = useUser();
   
    useEffect(() => {
    if (isSignedIn) {
      console.log("User email:", user?.primaryEmailAddress?.emailAddress);
      console.log("User name:", user?.fullName || user?.username);
      setIsPersonSignedIn(true);
      
    } else {
      console.log("No user logged in");
      setIsPersonSignedIn(false);
      
    }
    
  }, [isSignedIn, user]);
  useEffect(() => {
  console.log("Updated isPersonSignedIn:", isPersonSignedIn);
}, [isPersonSignedIn]);
    
    return (
      <div style={{ backgroundColor: 'black', position: 'relative', display: 'flex', flexDirection: 'column' }} className="w-full" ref={homeRef}>
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={800}
                    particleSpread={12}
                    speed={0.2}
                    particleBaseSize={70}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                    
                />
            </div>
            <nav style={{ zIndex: "10000", position: 'fixed' }} className="nav-bar navbar">
                <img src={react} className="nav-img" />



                <ol className="ol-items">
                    <li onClick={() => scrollToSection(homeRef)}>

                        <ShinyText
                            text="Home"
                            disabled={false}
                            speed={3}
                            className='custom-class  nav-li-items nav-btns'
                        />

                    </li>
                    <li onClick={() => scrollToSection(aboutRef)}>
                        <ShinyText
                            text="About"
                            disabled={false}
                            speed={3}
                            className='custom-class  nav-li-items nav-btns'
                        />

                    </li>
                    <li onClick={() => scrollToSection(skillsRef)}>
                        <ShinyText
                            text="Skills"
                            disabled={false}
                            speed={3}
                            className='custom-class  nav-li-items nav-btns'
                        />

                    </li>
                    <li onClick={() => scrollToSection(projectRef)}><ShinyText
                        text="Projects"
                        disabled={false}
                        speed={3}
                        className='custom-class  nav-li-items nav-btns'
                    />
                    </li>
                    <li onClick={() => scrollToSection(contactRef)}><ShinyText
                        text="ContactMe"
                        disabled={false}
                        speed={3}
                        className='custom-class  nav-li-items nav-btns'
                    />
                    </li>
                </ol>
                {/* clerk-auth*/}
                {/* Show Login if not signed in, else UserButton */}

                <div className="hide-mobile">
                    <SignedOut>

                        <button className="ol-items-auth " onClick={() => navigate("/login")} >
                            <ShinyText
                                text="Login"
                                disabled={false}
                                speed={3}
                                className='custom-class'
                            />
                        </button>
                    </SignedOut>
                    <SignedIn>

                        <UserButton appearance={{
                            elements: {
                                userButtonBox: {
                                    width: "39px",
                                    height: "39px",
                                    marginTop: "4px"

                                },
                                avatarBox: {
                                    width: "100%",
                                    height: "100%",
                                    borderWidth: "1px",
                                    borderColor: "white"
                                },
                            },
                        }} />

                    </SignedIn>
                </div>
                {/*clerk-auth-closed */}
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" /></svg>
                </div>
                {toggleHambarger && <button className="hamberger-icon" onClick={hambergerIconFunction}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" className="mr-7" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </button>
                } {!toggleHambarger &&
                    <div className={`sidebar slide-container`} style={{ zIndex: "1000" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" onClick={hambergerIconFunction}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        <ol className="ol-items side-nav-bar">
                            <li onClick={() => scrollToSection(homeRef)}><ShinyText
                                text="Home"
                                disabled={false}
                                speed={3}
                                className='custom-class  nav-li-items nav-btns'
                            />
                            </li>
                            <hr style={{ width: "200%" }}></hr>
                            <li onClick={() => scrollToSection(aboutRef)}><ShinyText
                                text="About"
                                disabled={false}
                                speed={3}
                                className='custom-class  nav-li-items nav-btns'
                            />
                            </li>
                            <hr style={{ width: "200%" }}></hr>
                            <li onClick={() => scrollToSection(skillsRef)}><ShinyText
                                text="Skills"
                                disabled={false}
                                speed={3}
                                className='custom-class  nav-li-items nav-btns'
                            />
                            </li>
                            <hr style={{ width: "200%" }}></hr>
                            <li onClick={() => scrollToSection(projectRef)}><ShinyText
                                text="Projects"
                                disabled={false}
                                speed={3}
                                className='custom-class  nav-li-items nav-btns'
                            />
                            </li>
                            <hr style={{ width: "200%" }}></hr>
                            <li onClick={() => scrollToSection(contactRef)}><ShinyText
                                text="ContactMe"
                                disabled={false}
                                speed={3}
                                className='custom-class  nav-li-items nav-btns'
                            />
                            </li>
                            <hr style={{ width: "200%" }}></hr>
                        </ol>

                        {/* clerk-auth*/}
                        {/* Show Login if not signed in, else UserButton */}
                        <div className="clerk-mobile-view">
                            <SignedOut>

                                <button className="clerk-mobile-btn" onClick={() => navigate("/login")} >
                                    <ShinyText
                                        text="Login"
                                        disabled={false}
                                        speed={3}
                                        className='custom-class'
                                    />
                                </button>
                            </SignedOut>
                            <SignedIn>
                                <div className="clerk-account">
                                    <UserButton appearance={{
                                        elements: {
                                            userButtonBox: {
                                                width: "60px",
                                                height: "60px",


                                            },
                                            avatarBox: {
                                                width: "100%",
                                                height: "100%",
                                                borderWidth: "1px",
                                                borderColor: "white"
                                            },
                                        },
                                    }} />
                                    <p>My Account</p>
                                </div>


                            </SignedIn>
                        </div>
                        {/*clerk-auth-closed */}
                    </div>
                }
            </nav>
            {/* Sidebar */}


            <div style={{ position: "absolute", marginTop: "100px", alignSelf: "center", display: "flex", flexDirection: "column" }} className="home-page">
                <img src={meee} className="h-42 w-45 rounded-full slide-image" style={{ backgroundColor: "#1097ff80", alignSelf: "center" }} />

                <SplitText
                    text="Hi ! I am Jeevan Teja"
                    className="my-name"
                    delay={50}
                    duration={0.6}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"


                />
                <h1 style={{ color: "red", marginTop: "10px", fontSize: "30px", textAlign: "Center", fontWeight: "bold" }} className="slide-text">Full Stack Developer</h1>
                <div className="">
                    <p className="c home-para josefin-sans">Full Stack Developer passionate about building interactive and user-friendly web applications. I enjoy turning ideas into real projects using modern technologies, constantly learning and improving my skills</p>

                </div>
                <div style={{ display: "flex", backgroundColor: "", justifyContent: "space-around", alignSelf: "center", marginTop: "20px" }} className="x">
                    <button style={{ backgroundColor: "#dae2e7ff", borderRadius: "50%", width: "45px", height: "45px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className="round-btn">
                        <i class="bi bi-linkedin" style={{ fontSize: "20px" }}></i>
                    </button>
                    <button style={{ backgroundColor: "#dae2e7ff", borderRadius: "50%", width: "45px", height: "45px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className="round-btn">

                        <i class="bi bi-envelope-fill" style={{ fontSize: "25px" }}></i>
                    </button>
                    <button style={{ backgroundColor: "#dae2e7ff", borderRadius: "50%", width: "45px", height: "45px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className="round-btn">

                        <i class="bi bi-facebook" style={{ fontSize: "25px" }}></i>
                    </button>
                    <button style={{ backgroundColor: "#dae2e7ff", borderRadius: "50%", width: "45px", height: "45px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className="round-btn">

                        <i class="bi bi-github" style={{ fontSize: "25px" }}></i>
                    </button>
                </div>
                <div className="two-btn-home">


                    <button class="button home-btn home-btn-one" style={{ height: "40px", padding: "5px", width: "150px", fontSize: "15px" }}>
                        <span > <i class="bi bi-chat-dots" style={{ marginRight: "10px" }}></i>Let's Connect</span>
                    </button>
                    <button class="button home-btn home-btn-two" style={{ height: "40px", padding: "5px", width: "150px", fontSize: "15px" }}>
                        <span > <i class="bi bi-download" style={{ marginRight: "10px" }}></i>Resume</span>
                    </button>

                </div>
            </div>

            <section ref={aboutRef}>
                <About />
            </section>
            <section ref={skillsRef}>
                <Skills />
            </section>
            <section ref={projectRef}>
                <Projects />
            </section>
            <section ref={contactRef}>
                <Contact isPersonSignIn={isPersonSignedIn}/>
            </section>
            <Footer/>
        </div>

    )
}
export default Home