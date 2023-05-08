import { Link } from 'react-router-dom';
import './_MovieCard.scss';
import defaultImage from '../../public/movieposter.svg';

function MovieCard({ movie }) {

    // Check if img source is ok
    function checkSrc(src) {
        let checkedSrc;
        try {
            checkedSrc = new URL(src);
        } catch (error) {
            return defaultImage;
        }
        return src;
    }

    return (
        <article className='movie-card'>
            <figure>
                <Link to={`/${movie.id}`} state={movie}>
                    <img src={checkSrc(movie.img)} alt="Movie poster" />
                </Link>
            </figure>
            <section className='content'>
                <h3>{movie.title}</h3>
                <section>
                    <p>{movie.year}</p>
                    <p>{movie.director}</p>
                    <p> <em>&#9733;</em> {movie.rating}</p>
                </section>
            </section>
        </article>
    );
}

export default MovieCard;