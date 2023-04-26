import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from '../components/Button';
import { deleteMovie } from "../store/slices/moviesSlice";

function Movie() {
    const title = useParams().title;
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ movie ] = movies.filter(movie => movie.title === title);

    function handleDelete() {
        dispatch(deleteMovie(movie));
        navigate('/all-movies');
    }
    function handleEdit() {
        console.log('edit')
    }


    return (  
        <main className="movie">
             {movie ? 
             <>
                <h2>{movie.title}</h2>
                <section>
                    <p>Director: <span>{movie.director}</span></p>
                    <p>Year: <span>{movie.year}</span></p>
                    <p>My Rating: <span>{movie.rating}</span></p>
                    <section>
                        <Button children={'Delete'} type={'delete'} onClick={handleDelete} />
                        <Button children={'Edit'} type={'edit'} onClick={handleEdit}/>
                    </section> 
                </section>
             </> :
             <p className="loading">Loading...</p> }
        </main>
    );
}

export default Movie;