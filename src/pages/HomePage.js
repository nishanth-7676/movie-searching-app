import {useState} from "react";

import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import FilterDropdown from "../components/FilterDropdown";
import { fetchMovies } from "../api/api";

function HomePage () {
    const [movies, setMovies] = useState([]);
    const [filterType, setFilterType] = useState(''); // You need to use this value

    //handle search
    const handleSearch = async(searchTerm) => {
        const result = await fetchMovies(searchTerm, filterType); // Apply filterType here
        setMovies(result);
    };

    // handle filter
    const handleFilterChange = (type) => {
        setFilterType(type); // Keep setting the filter type
    };

    return (
        <div className="home-page">
            <h1>Find your movie</h1>
            {/* Searchbar */}
            <SearchBar onSearch={handleSearch} />
            <FilterDropdown onFilterChange={handleFilterChange} />
            <MovieList movies={movies} />
        </div>
    );
}

export default HomePage;
