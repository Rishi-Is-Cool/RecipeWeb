import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Main.css";

// Importing correct images
import maharashtrian from "../assets/maharashtrian_cuisine.jpg";
import gujarati from "../assets/gujrathi.jpg";
import bengali from "../assets/bengali.jpg";
import northIndian from "../assets/north-Indian.jpg";
import northEasternIndian from "../assets/north-eastern-indian.jpg";
import southIndian from "../assets/south-indian.jpg";

// Updated cuisines array with correct image references
const cuisines = [
    { name: "MAHARASHTRIAN", image: maharashtrian, path: "/maharashtrian" },
    { name: "GUJARATI", image: gujarati, path: "/gujarati" },
    { name: "BENGALI", image: bengali, path: "/bengali" },
    { name: "NORTH INDIAN", image: northIndian, path: "/north-indian" },
    { name: "NORTH EASTERN INDIAN", image: northEasternIndian, path: "/north-eastern-indian" },
    { name: "SOUTH INDIAN", image: southIndian, path: "/south-indian" },
];

const CuisineCards = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="heading">
                <h1>
                    <span className="blockA">Simple recipes made for</span>
                    <span className="blockB">real, actual, everyday life</span>
                </h1>
            </div>
            <section className="cuisine">
                <div className="cards-container">
                    {cuisines.map((cuisine, index) => (
                        <div key={index} className="card" onClick={() => navigate(cuisine.path)}>
                            <img src={cuisine.image} alt={cuisine.name} />
                            <p>{cuisine.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CuisineCards;

