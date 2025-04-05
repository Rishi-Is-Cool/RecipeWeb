import React, { useState} from 'react';
import Typewriter from "./Typewriter";
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div>
            <div className="typewriter-container">
                <Typewriter />
            </div>
            <form onSubmit={handleSearch} className="search-container">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input 
                    type="text" 
                    placeholder="Search for recipes..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Search
