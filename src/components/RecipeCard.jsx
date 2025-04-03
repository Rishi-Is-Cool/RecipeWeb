import React from 'react'
import "../styles/recipeCard.css";

const RecipeCard = ({ image, type, title, totalTime }) => {
    return (
        <div className="cards">
            <img src={image} alt="recipe_image" />
            <div className="recipe-info">
                <span className="recipe-details">
                    <p className="recipe-type">{type}</p>
                    <p className="recipe-time">⏳ {totalTime} mins</p>
                </span>
                <p className="recipe-title">{title}</p>
            </div>
        </div>
    );
};

export default RecipeCard

