import React from 'react'
import "../styles/cuisinePage.css"; // Style file for all cuisines
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


const CuisinePage = () => {

    const { cuisine } = useParams(); // Get the cuisine name from the URL
    const cuisineName = cuisine.replace("-", " ").toUpperCase(); // Format for display


    return (
        <div>
            <NavBar />
        </div>
    );

}

export default CuisinePage
