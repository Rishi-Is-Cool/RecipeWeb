import React, { useEffect } from 'react';
import "../styles/recipeCard.css";
import RecipeCard from "../components/RecipeCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const dummyRecipes = [
    { image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Raksha_Kamat/Cucumber_Thalipeeth.jpg", type: "Breakfast", title: "Pancakes" },
    { image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/_Maharashtra_Green_Chilli_Thecha_Recipe_.jpg", type: "Lunch", title: "Grilled Chicken" },
    { image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Misal_Pav.jpg", type: "Dinner", title: "Pasta" },
    { image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/10-oct/Khandeshi_Sev_Bhaji_Recipe-9459.jpg", type: "Vegan", title: "Salad Bowl" },
    { image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Dadpe_Pohe_Recipe.jpg", type: "Dessert", title: "Chocolate Cake" },
    { image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/poojanadkarni/Bharli_Vangi__Stuffed_Brinjals.jpg", type: "Indian", title: "Butter Naan" },
    { image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/pooja/Paneer_Kolhapuri_1600.jpg", type: "Italian", title: "Margherita Pizza" },
    { image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Banana_Sheera_Recipe_Sweet_Banana_Pudding_Recipe.jpg", type: "Drinks", title: "Mango Shake" },
    { image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/madhulia/Alu_vadi_Patrode.jpg", type: "Snacks", title: "French Fries" },
];

const NorthEasternIndianPage = () => {

    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
          
    return (
        <div className="container">
            <NavBar />
            <div className="headings">
                <h1>North East Indian Cuisine</h1>
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
}

export default NorthEasternIndianPage
