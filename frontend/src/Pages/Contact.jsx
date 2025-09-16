import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css"
import Particles from "../Particles";
import contactImg from "../assets/contactImg.svg";
import meee from "../assets/meee.png";
import { useSelector } from "react-redux";
import { changeThemeSwitch } from "../store/Slices/themeSwitcher";

function Contact({ isPersonSignIn, mail }) {
    const form = useRef();
    const navigate = useNavigate();
    const theme = useSelector((state) => state.darkorlight.isDark);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleChange = (e) => {
        console.log("Typed value:", e.target.value); // logs as user types
        setName(e.target.value); // updates state
    };
    const descriptionChange = (e) => {
        console.log("Typed value:", e.target.value); // logs as user types
        setDescription(e.target.value); // updates state
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        emailjs
            .sendForm('service_ddvv3pb', 'template_lbflidt', form.current, {
                publicKey: '1AyoOPJjLNDIfIZNF',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        title: "Message Sent Successfully",
                        icon: "success",
                        confirmButtonText: "OK",
                        customClass: {
                            popup: 'swal2-container'
                        }
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        customClass: { popup: 'swal2-container' }
                    });
                },
            );
        e.target.reset();
    };

    return (
        <div className="contact-main-container">

            <h1 className={`block ${theme ? "about-text-dark" : "about-text-light"} `} style={{ position: "relative", zIndex: 2000 }}>Let's Connect</h1>
            <div className="form-with-img" style={{ position: "relative", zIndex: 2000 }}>
                <img src={contactImg} style={{ zIndex: 3000, position: "relative" }} className="image-zoom" />
                <form className={`form block ${theme ? "form-dark" : "form-light"}`} ref={form} onSubmit={submitHandler}>
                    <div className="input-name">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="input-name-placeholder" placeholder="Enter your Name" onChange={handleChange} required name="name" />
                    </div>
                    <div className="input-name">
                        <label htmlFor="Email">Email</label>
                        <input type="text" id="Email" className="input-name-placeholder" placeholder="Enter your Email" value={mail ? mail : "Please login with mail"} readOnly name="mail" />
                    </div>
                    <div className="text-area">
                        <label htmlFor="description">Message</label>
                        <textarea type="text" id="description" className="text" placeholder="write...." onChange={descriptionChange} required name="message" />
                    </div>
                    {isPersonSignIn ?
                        <button type="submit" className="form-btn">Submit</button> : <button type="button" onClick={() => navigate("/login")} className="form-btn">Login To Submit</button>}
                </form>
            </div>
            <div className={`footer ${theme ? "copy-dark" : "copy-light"}`}>
                <hr className={`${theme ? "dark-line" : "light-line"}`}></hr>
                <p >© 2025 Jeevan Teja. All Rights Reserved.</p>
                <div style={{ display: "flex", backgroundColor: "", justifyContent: "space-around", alignSelf: "center", marginTop: "20px" }} className="footer-icon">
                    <button style={{ backgroundColor: "#4a97c7ff", borderRadius: "50%", width: "45px", height: "45px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className="round-btn">
                        <a href="https://www.linkedin.com/in/jeevanteja/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin" style={{ fontSize: "20px", color: "#0e508eff" }}></i></a>
                    </button>
                    <button style={{ backgroundColor: "#4a97c7ff", borderRadius: "50%", width: "45px", height: "45px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className="round-btn">
                        <a href="https://www.instagram.com/_jeevan_tej/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram" style={{ fontSize: "25px", color: "#0e508eff" }}></i></a>

                    </button>

                    <button style={{ backgroundColor: "#4a97c7ff", borderRadius: "50%", width: "45px", height: "45px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} className="round-btn">

                        <a href="https://github.com/jeevanteja2004" target="_blank" rel="noopener noreferrer"><i class="bi bi-github" style={{ fontSize: "25px", color: "#0e508eff" }}></i></a>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Contact;