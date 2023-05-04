import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteMovie } from "../store/slices/moviesSlice";
import { useState } from "react";
import Button from '../components/Button';
import EditMovie from "../components/EditMovie";

function Movie() {
    const id = useParams().id;
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showEdit, setShowEdit] = useState(false);

    const [movie] = movies.filter(movie => movie.id.toString() === id);

    function handleDelete() {
        dispatch(deleteMovie(movie));
        navigate('/all-movies');
    }
    function handleEdit() {
        setShowEdit(prevState => !prevState);
    }
    function goBack() {
        navigate(-1);
    }

    return (
        <main className="movie">
            {movie ?
                <>
                    <h2>{movie.title}</h2>

                    {showEdit ?
                        <EditMovie movie={movie} setShowEdit={setShowEdit} /> :
                        <>
                            <section className="info">
                                <section className="year-movie-rating">
                                    <p><span>Director</span> {movie.director}</p>
                                    <p><span>Year</span> {movie.year}</p>
                                    <p><span>My Rating</span> {movie.rating}</p>
                                </section>
                                {movie.comment &&
                                    <section className="comment">
                                        <p>{movie.comment}</p>
                                    </section>
                                }
                                <section className="btn-section">
                                    <Button children={'Delete'} type={'delete'} onClick={handleDelete} />
                                    <Button children={'Edit'} type={'edit'} onClick={handleEdit} />
                                </section>
                            </section>
                        </>
                    }
                </> :
                <p className="loading">Loading...</p>
            }

            {!showEdit &&
                <div className="primary-btn-container">
                    <Button children={'Take me back'} type={'primary'} onClick={goBack} />
                </div>
            }
        </main>
    );
}

export default Movie;