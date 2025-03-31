import React from 'react'
import Typewriter from "./Typewriter";

const Search = () => {
    return (
        <div>
            <div className="typewriter-container">
                <Typewriter />
            </div>
            <div className="search-container">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for recipes..." />
            </div>
        </div>
    )
}

export default Search
