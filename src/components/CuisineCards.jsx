import React from 'react'
import { useNavigate } from "react-router-dom";
import "../styles/Main.css";
import indian from "../assets/indian.jpeg";
import japanese from "../assets/japanese.jpg";
import korean from "../assets/korean.jpg";
import thai from "../assets/thai.jpg";
import american from "../assets/american.jpg";
import french from "../assets/french.jpg";

const cuisines = [
    { name: "MAHARASTRIAN", image: indian, path: "/maharashtrian" },
    { name: "GUJRATHI", image: japanese, path: "/gujarati" },
    { name: "BENGALI", image: korean, path: "/bengali" },
    { name: "NORTH INDIAN", image: thai, path: "/north-indian" },
    { name: "NORTH EASTERN INDIAN", image: american, path: "/north-eastern-indian" },
    { name: "SOUTH INDIAN", image: french, path: "/south-indian" },
];

const CuisineCards = () => {

    const navigate = useNavigate();


    return (
        <div>
            <div className="heading">
                <h1>
                    <span className="blockA">simple recipes made for</span>
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
    )
}

export default CuisineCards
