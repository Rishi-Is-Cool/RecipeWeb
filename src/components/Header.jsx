import React from "react";
import "../styles/home.css";
import Typewriter from "./Typewriter";
import logo from "../assets/l2.png";

const Header = () => {
  return (
    <div>
        <header>
            <div className="header-overlay"></div>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <a href="#Home">Home</a>
                <a href="#ChatBot">ChatBot</a>
                <a href="#About">About</a>
                <a href="#Contact">Contact</a>
            </nav>
            <div className="typewriter-container">
                <Typewriter />
            </div>
            <div className="search-container">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for recipes..." />
            </div>
        </header>
    </div>
  )
}

export default Header
