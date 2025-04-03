import React, { useEffect, useState } from "react";
import "../styles/recipeCard.css";
import RecipeCard from "../components/RecipeCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const SouthIndianPage = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch data from Flask API
        fetch("http://127.0.0.1:5000/recipes?cuisine=South Indian Recipes") // Update with your API URL
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <div className="container">
            <NavBar />
            <div className="headings">
                <h1>South Indian Cuisine</h1>
                <h4>Collection of 90 Tasty Vegetarian South Indian Food Recipes</h4>
                <hr />
                <div className="wrapper">
                    <div className="card-container">
                        {recipes.map((recipe, index) => (
                            <RecipeCard
                                key={index}
                                image={recipe.image}
                                type={recipe.course}
                                title={recipe.title}
                                totalTime={recipe.total_time}
                            />
                        ))}
                    </div>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default SouthIndianPage

