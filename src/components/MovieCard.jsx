import { Link } from 'react-router-dom';
// import './_MovieCard.scss';
import defaultImage from '../../public/movieposter.svg';

function MovieCard({ movie }) {

    // Check if link is ok
    function checkSrc(src, isImage) {
        let checkedSrc;
        try {
            checkedSrc = new URL(src);
        } catch (error) {
            console.log("Broken link", error);
            if (isImage) {
                return defaultImage;
            } else {
                return 'https://www.imdb.com/';
            }
        }
        return src;
    }

    return (
        <article>
            <Link to={`/${movie.id}`} state={movie}>
                <figure>
                    <img src={checkSrc(movie.img, true)} alt="Movie poster" />
                </figure>
            </Link>
            <h3>{movie.title}</h3>
            <section>
                <p>{movie.year}</p>
                <p>{movie.director}</p>
                <p> <em>&#9733;</em> {movie.rating}</p>
            </section>
            <a href={checkSrc(movie.imdb)} target="_blank">Link to IMDB</a>
        </article>
    );
}

export default MovieCard;