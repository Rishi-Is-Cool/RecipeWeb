import React from 'react'
import "../styles/recipeCard.css";

const RecipeCard = ({ image, type, title }) => {
    return (
        <div className="cards">
            <img src={image} alt="recipe_image" />
            <div className="recipe-info">
                <p className="recipe-type">{type}</p>
                <p className="recipe-title">{title}</p>
            </div>
        </div>
    );
};

export default RecipeCard

