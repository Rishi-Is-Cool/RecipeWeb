import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/SignIn", formData);
            console.log("Server Response:", response.data);
            
            if (response.data.message === "Login successful") {
                setMessage("Login successful!");
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setTimeout(() => {
                    navigate('/');  // Redirect to home
                }, 1500);    
            } else {
                setMessage(response.data.error || "Invalid credentials");
            }
        } catch (error) {
            setMessage(error.response?.data?.error || "Server error. Please try again.");
        }
    };
    
    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="signup-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="signup-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="signup-submit">
                        <button type="submit">Sign In</button>
                    </div>
                </form>
                {message && <p className="alert">{message}</p>}
            </div>
        </div>
    );
};

export default SignIn;

