import React, { useState, useEffect } from "react";
import "../styles/Nav.css";
import Typewriter from "./Typewriter";
import logo from "../assets/l2.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    useEffect(() => {
        const closeDropdown = (event) => {
            if (isOpen && !event.target.closest(".user-container")) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", closeDropdown);
        return () => document.removeEventListener("click", closeDropdown);
    }, [isOpen]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        alert("Successfully logged out!");
        navigate("/");
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
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
                            <button onClick={handleLogout} className="logout-btn">Logout</button>

                            {/* User Icon as Button */}
                            <div className="user-container">
                                <button className="user-icon" onClick={toggleDropdown}>
                                    {user.first_name.charAt(0).toUpperCase()}
                                </button>

                                {/* Dropdown Menu */}
                                {isOpen && (
                                    <div className="dropdown-menu">
                                        <p><strong>{user.first_name} {user.last_name}</strong></p>
                                        <p><strong>Phone No:</strong> {user.phone_no}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <hr />
                                        <button onClick={() => navigate("/edit-profile")}>Edit Profile</button>
                                        <button onClick={() => navigate("/search-history")}>Search History</button>
                                        <button onClick={handleLogout}>Logout</button>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        // If not logged in, show Login link
                        <Link to="/Login">
                            <button className="login-btn">Login</button>
                        </Link>
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
