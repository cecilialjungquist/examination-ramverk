import './_views.scss';
import MovieCard from "../components/MovieCard";
import { useSelector } from 'react-redux';

function AllMovies() {
    const movies = useSelector(state => state.movies);
    const movieCards = movies.map(movie => <MovieCard movie={movie} key={movie.id} />)

    return (  
        <main className="all-movies">
            <h2>All Movies</h2>
            <section className='container'>
            {movieCards.length > 0 ? movieCards : <p>Add a movie to the list!</p>}
            </section>
        </main>
    );
}

export default AllMovies;