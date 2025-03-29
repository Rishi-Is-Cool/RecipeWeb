import React, { useState, useEffect } from "react";
import "../styles/Nav.css";
import Typewriter from "./Typewriter";
import logo from "../assets/l2.png";
import { Link, useNavigate } from "react-router-dom"; 

const Header = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        alert("Successfully logged out!");
        navigate("/");
    };

    return (
        <div>
            <header>
                <div className="header-overlay"></div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>
                    {/* <a href="/Login">Login</a> */}
                    {user ? (
                        <>
                            {/* If logged in, show Logout button & Profile Icon */}
                            <button onClick={handleLogout} className="logout-btn">Logout</button>
                            <div className="user-icon">{user.first_name.charAt(0).toUpperCase()}</div>
                        </>
                    ) : (
                        // If not logged in, show Login link
                        <Link to="/Login"><button className="login-btn">Login</button></Link>
                    )}
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
