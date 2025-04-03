import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/recipePage.css";

const RecipePage = () => {
    const { recipeName } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        setError(null);

        const fetchRecipe = async () => {
            // First try with the exact name from URL
            let cleanedName = recipeName;
            let apiUrl = `http://127.0.0.1:5000/recipe/${encodeURIComponent(cleanedName)}`;

            try {
                // First attempt
                let response = await fetch(apiUrl);

                // If first attempt fails, try removing "Recipe" suffix
                if (!response.ok) {
                    cleanedName = recipeName.replace(/\s*Recipe\s*$/i, '').trim();
                    apiUrl = `http://127.0.0.1:5000/recipe/${encodeURIComponent(cleanedName)}`;
                    response = await fetch(apiUrl);
                }

                // If still failing, try removing the hyphenated part
                if (!response.ok && cleanedName.includes(' - ')) {
                    cleanedName = cleanedName.split(' - ')[0].trim();
                    apiUrl = `http://127.0.0.1:5000/recipe/${encodeURIComponent(cleanedName)}`;
                    response = await fetch(apiUrl);
                }

                if (!response.ok) {
                    throw new Error(`Recipe "${recipeName}" not found. Tried variations: 
                        ${recipeName}, 
                        ${recipeName.replace(/\s*Recipe\s*$/i, '').trim()}, 
                        ${recipeName.split(' - ')[0].trim()}`);
                }

                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error("Fetch error:", {
                    originalName: recipeName,
                    attemptedNames: [
                        recipeName,
                        recipeName.replace(/\s*Recipe\s*$/i, '').trim(),
                        recipeName.split(' - ')[0].trim()
                    ],
                    error: error.message
                });
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [recipeName]);

    // Render loading/error states
    if (loading) return <div className="loading">Loading recipe...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="rp-container">
            <NavBar />
            <div className="rp-content">
                <h1 className="rp-title">{recipe.title}</h1>
                <p className="rp-course">{recipe.course}</p>

                <div className="rp-header">
                    <img src={recipe.url} alt={recipe.title} className="rp-image" />

                    <div className="rp-times">
                        <div className="rp-time-item">
                            <span className="rp-time-label">Prep Time:</span>
                            <span className="rp-time-value">{recipe.prep_time} mins</span>
                        </div>
                        <div className="rp-time-item">
                            <span className="rp-time-label">Cook Time:</span>
                            <span className="rp-time-value">{recipe.cook_time} mins</span>
                        </div>
                        <div className="rp-time-item">
                            <span className="rp-time-label">Total Time:</span>
                            <span className="rp-time-value">{recipe.total_time} mins</span>
                        </div>
                    </div>
                </div>

                <div className="rp-details">
                    <div className="rp-ingredients-section">
                        <h2>Ingredients</h2>
                        <ul className="rp-ingredients-list">
                            {recipe.ingredients.split(',').map((ingredient, index) => (
                                ingredient.trim() && <li key={index} className="rp-ingredient-item">{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="rp-instructions-section">
                        <h2>Instructions</h2>
                        <ol className="rp-instructions-list">
                            {recipe.instructions.split(',').map((instruction, index) => (
                                instruction.trim() && <li key={index} className="rp-instruction-item">{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RecipePage;