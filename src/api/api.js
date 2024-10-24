const API_KEY = '8ecaa433';

export const fetchMovies = async (searchTerm, type) => {
    const url = `https://www.omdbapi.com/?s=${searchTerm}&type=${type}&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);

        const data = await response.json();

        return data.Search || []

    } catch(error) {
        console.error("error fetching movies", error);
        return[]
    }
}

export const fetchMovieDetail = async(id) => {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);

        const data = await response.json();

        return data;

    } catch(error) {
        console.error("error fetching movies", error);
        return null;
    }
}