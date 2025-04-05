import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import "../styles/searchresult.css";

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get search query from URL
    const searchQuery = new URLSearchParams(location.search).get('q');

    useEffect(() => {
        if (!searchQuery) {
            navigate('/');
            return;
        }

        const fetchResults = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://127.0.0.1:5000/search-recipes?q=${encodeURIComponent(searchQuery)}`);
                
                if (!response.ok) throw new Error('Search failed');
                
                const data = await response.json();
                
                // Transform data to match RecipeCard props with proper type checking
                const formattedRecipes = data.map(recipe => {
                    // Handle total_time - convert to string if it's a number
                    let totalTime = 'N/A';
                    if (recipe.total_time) {
                        totalTime = typeof recipe.total_time === 'string' 
                            ? recipe.total_time.replace(' mins', '')
                            : String(recipe.total_time);
                    }

                    return {
                        image: recipe.url || '/images/default-recipe.jpg',
                        type: recipe.cuisine || recipe.course || 'Recipe',
                        title: recipe.title || 'Untitled Recipe',
                        totalTime: totalTime
                    };
                });
                
                setRecipes(formattedRecipes);
                setError(null);
            } catch (err) {
                setError(err.message);
                setRecipes([]);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [searchQuery, navigate]);

    return (
        <div className="search-results-page">
            <h2>Search Results for "{searchQuery}"</h2>
            
            {loading ? (
                <div className="loading-message">Loading recipes...</div>
            ) : error ? (
                <div className="error-message">{error}</div>
            ) : recipes.length === 0 ? (
                <div className="no-results">No recipes found. Try a different search.</div>
            ) : (
                <div className="recipes-container">
                    {recipes.map((recipe, index) => (
                        <RecipeCard 
                            key={index}
                            image={recipe.image}
                            type={recipe.type}
                            title={recipe.title}
                            totalTime={recipe.totalTime}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;