import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from '../components/Button';
import { deleteMovie } from "../store/slices/moviesSlice";
import EditMovie from "../components/EditMovie";
import { useState } from "react";

function Movie() {
    const id = parseInt(useParams().id);
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showEdit, setShowEdit] = useState(false);

    const [movie] = movies.filter(movie => movie.id === id);

    function handleDelete() {
        dispatch(deleteMovie(movie));
        navigate('/all-movies');
    }
    function handleEdit() {
        setShowEdit(prevState => !prevState);
    }


    // Fixa denna snyggare
    return (
        <main className="movie">
            {!movie && <p className="loading">Loading...</p>}
            {movie &&  <h2>{movie.title}</h2> }
            {movie && !showEdit &&
                <>
                    <section className="info">
                        <p><span>Director:</span> {movie.director}</p>
                        <p><span>Year:</span> {movie.year}</p>
                        <p><span>My Rating:</span> {movie.rating}</p>
                        <section>
                            <Button children={'Delete'} type={'delete'} onClick={handleDelete} />
                            <Button children={'Edit'} type={'edit'} onClick={handleEdit} />
                        </section>
                    </section>
                </> 
            }

            {movie &&
                showEdit &&
                <EditMovie movie={movie} setShowEdit={setShowEdit} />
            }
            {!showEdit &&
                <div className="btn-container">
                    <Button children={'Take me back'} type={'primary'} />
                </div>
            }
        </main>
    );
}

export default Movie;