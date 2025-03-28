import React from 'react'
import "../styles/Main.css";
import indian from "../assets/indian.jpeg";
import japanese from "../assets/japanese.jpg";
import korean from "../assets/korean.jpg";
import thai from "../assets/thai.jpg";
import american from "../assets/american.jpg";
import french from "../assets/french.jpg";

const cuisines = [
  { name: "INDIAN", image: indian },
  { name: "CHINESE", image: japanese },
  { name: "KOREAN", image: korean },
  { name: "THAI", image: thai },
  { name: "AMERICAN", image: american },
  { name: "FRENCH", image: french },
];

const CuisineCards = () => {
  return (
    <div>
        <div className="heading">
            <h1>
                <span className="blockA">
                    simple recipes made for
                </span>

                <span className="blockB">
                    real, actual, everyday life
                </span>
            </h1>
        </div>
        <section className="cuisine">
        <div className="cards-container">
            {cuisines.map((cuisine, index) => (
            <div key={index} className="card">
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
