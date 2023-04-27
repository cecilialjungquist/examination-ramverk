import { Link } from 'react-router-dom';
import './MovieCard.scss';

function MovieCard({ movie }) {

    return (  
        <article>
            <Link to={`/${movie.id}`} state={movie}>
                <figure>
                    <img src={movie.img} alt="Movie poster" />
                </figure>
            </Link>
            <h3>{movie.title}</h3>
            <section>
                <p>{movie.year}</p>
                <p>{movie.director}</p>
                <p> <em>&#9733;</em> {movie.rating}</p>
            </section>
                <a href={movie.imdb} target="_blank">Link to IMDB</a>
        </article>
    );
}

export default MovieCard;