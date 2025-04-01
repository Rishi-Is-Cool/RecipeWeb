import React from 'react'
import "../styles/recipeCard.css";
import RecipeCard from "../components/RecipeCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const dummyRecipes = [
    { image: "https://www.vegrecipesofindia.com/wp-content/uploads/2023/02/sabudana-khichdi-1-280x280.jpg", type: "Breakfast", title: "Pancakes" },
    { image: "https://www.vegrecipesofindia.com/wp-content/uploads/2010/08/pani-puri-recipe-280x280.jpg", type: "Lunch", title: "Grilled Chicken" },
    { image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/08/modak-recipe-280x280.jpg", type: "Dinner", title: "Pasta" },
    { image: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/09/puran-poli-recipe-280x280.jpg", type: "Vegan", title: "Salad Bowl" },
    { image: "https://www.vegrecipesofindia.com/wp-content/uploads/2022/09/poha-recipe-1-280x280.jpg", type: "Dessert", title: "Chocolate Cake" },
    { image: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/10/chakli-3-280x280.jpg", type: "Indian", title: "Butter Naan" },
    { image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/sabudana-vada-recipe-3-280x280.jpg", type: "Italian", title: "Margherita Pizza" },
    { image: "https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/vada-pav-recipe-280x280.jpg", type: "Drinks", title: "Mango Shake" },
    { image: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/03/bajra-roti-280x280.jpg", type: "Snacks", title: "French Fries" },
];

const CuisinePage = () => {
    return (
            <div className="container">
                <NavBar />
                <div className="headings">
                    <h1>Maharashtrian Cuisine</h1>
                    <h4>Collection of 90 Tasty Vegetarian Maharashtrian Food Recipes</h4>
                    <hr />
                    <div className="wrapper">
                        <div className="card-container">
                            {dummyRecipes.map((recipe, index) => (
                                <RecipeCard key={index} image={recipe.image} type={recipe.type} title={recipe.title} />
                            ))}
                        </div>
                    </div>
                    <hr />
                </div>
                <Footer />
            </div>
    );
};

export default CuisinePage
