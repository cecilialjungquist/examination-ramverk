import { Link } from 'react-router-dom';
import './MovieCard.scss';

function MovieCard({ movie }) {

    return (  
        <article>
            <Link to={`/${movie.title}`} state={movie}>
                <figure>
                    <img src={movie.img} alt="Movie poster" />
                </figure>
            </Link>
            <h3>{movie.title}</h3>
            <section>
                <p>{movie.year}</p>
                <p>{movie.director}</p>
                <p>{movie.rating}</p>
                <a href={movie.imdb} target="_blank">Link to IMDB</a>
            </section>
        </article>
    );
}

export default MovieCard;