import React from 'react'

const RecipeCard = ({ recipe, isLiked, isSaved, onLike, onSave }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h3>{recipe.name}</h3>
            <div className="recipe-actions">
                <button onClick={onLike} className={isLiked ? "liked" : ""}>
                    ❤️
                </button>
                <button onClick={onSave} className={isSaved ? "saved" : ""}>
                    📥
                </button>
            </div>
        </div>
    );
};

export default RecipeCard

