
import { Link } from "react-router-dom"
function MovieCard ({movie}) {

    return (
        <div className= "movie-card">
            <Link to = {`/movies/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />

            <div className = "movie-details">
                <h3>{movie.Title}</h3>
                <p>{movie.year}</p>
            </div>
            </Link>
        </div>
    )
}

export default MovieCard