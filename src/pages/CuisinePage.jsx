import React, { useState } from "react";
import "../styles/cuisinePage.css"; // Style file for all cuisines
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard"; // Component for individual recipes

import maharashtrian from "../assets/maharashtrian_cuisine.jpg";
import gujrathi from "../assets/gujrathi.jpg";
import bengali from "../assets/bengali.jpg";
import north-indian from "../assets/north-Indian.jpg";
import north-eastern-indian from "../assets/north-eastern-indian.jpg";
import south-indian from "../assets/south-indian.jpg";

const cuisineImages = {
    maharashtrian: maharastrian,
    gujarati: gujrathi,
    bengali: bengali,
    "north-indian": north-indian,
    "north-eastern-indian": north-easter-indian,
    "south-indian": south-indian,
};

const CuisinePage = () => {

    const { cuisine } = useParams(); // Get the cuisine name from the URL
    const cuisineName = cuisine.replace("-", " ").toUpperCase(); // Format for display
    const cuisineImage = cuisineImages[cuisine] || cuisineImages["north-indian"]; // Default image

    const recipes = [
        { id: 1, name: "Recipe 1", image: maharashtrain },
        { id: 2, name: "Recipe 2", image: gujrathi },
        { id: 3, name: "Recipe 3", image: bengali },
        { id: 4, name: "Recipe 4", image: north-indian },
    ];

    const [likedRecipes, setLikedRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    
    // Handle Like Recipe
    const toggleLike = (id) => {
        setLikedRecipes((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Handle Save Recipe (Watch Later)
    const toggleSave = (id) => {
        setSavedRecipes((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div>
            <NavBar />

            {/* Banner Section */}
            <div className="cuisine-banner" style={{ backgroundImage: `url(${cuisineImage})` }}>
                <h1>{cuisineName} Cuisine</h1>
            </div>

            {/* Recipe Count */}
            <div className="recipe-count">
                <p>We have 30+ delicious {cuisineName} recipes for you!</p>
            </div>

            {/* Recipe Section */}
            <div className="recipes-section">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        isLiked={likedRecipes.includes(recipe.id)}
                        isSaved={savedRecipes.includes(recipe.id)}
                        onLike={() => toggleLike(recipe.id)}
                        onSave={() => toggleSave(recipe.id)}
                    />
                ))}
            </div>
        </div>
    );

}

export default CuisinePage
