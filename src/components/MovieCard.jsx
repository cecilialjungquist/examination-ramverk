import './MovieCard.scss';

function MovieCard() {
    const movie = {
        id: 308,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: "1994",
        img: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        imdb: "https://www.imdb.com/title/tt0110912/",
        rating: 5
    }

    return (  
        <article>
            <figure>
                <img src={movie.img} alt="Movie poster" />
            </figure>
            <h2>{movie.title}</h2>
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