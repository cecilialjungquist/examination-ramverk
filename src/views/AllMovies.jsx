import './_views.scss';
import MovieCard from "../components/MovieCard";
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function AllMovies() {
    const movies = useSelector(state => state.movies);
    const movieCards = movies.map(movie => <MovieCard movie={movie} key={movie.id} />);

    return (  
        <main className="all-movies">
            <h2>All Movies</h2>
            <section className='container'>
            {movieCards.length > 0 ? movieCards : 
                <section className='no-movies'>
                    <p className='message'>There's no movies here yet! Want to add one?</p>
                    <Link to={'/add-movie'}>
                        <div className='primary-btn-container'>
                            <Button children={'Yes!'} type={'primary'} />
                        </div>
                    </Link>
                </section>
            }
            </section>
        </main>
    );
}

export default AllMovies;