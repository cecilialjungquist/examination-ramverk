import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addMovieComment, deleteMovie, deleteMovieComment } from "../store/slices/moviesSlice";
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
    let comments;

    if (movie) {
        // Fixa id här på ett bättre sätt
        // comments = movie.comments.map(comment => <Comment comment={comment} key={movie.id + Math.random()} />);
    }

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
    function addClick() {
        const newComment = {
            date: new Date().toLocaleDateString(),
            body: 'This is an added comment.'
        }

        console.log(newComment)

        dispatch(addMovieComment({ id: movie.id, newComment }))
    }
    function deleteClick() {
        const newComment = {
            date: new Date().toLocaleDateString(),
            body: 'This is an added comment.'
        }

        console.log(newComment)

        dispatch(deleteMovieComment({ id: movie.id, newComment }))
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
                                <p><span>Director:</span> {movie.director}</p>
                                <p><span>Year:</span> {movie.year}</p>
                                <p><span>My Rating:</span> {movie.rating}</p>
                                <section className="btn-section">
                                    <Button children={'Delete'} type={'delete'} onClick={handleDelete} />
                                    <Button children={'Edit'} type={'edit'} onClick={handleEdit} />
                                </section>
                                <button onClick={addClick}>Add comment</button>
                                <button onClick={deleteClick}>Delete comment</button>
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