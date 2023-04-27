import './EditMovie.scss';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editMovie } from "../store/slices/moviesSlice";
import Button from './Button';

function EditMovie({ movie, setShowEdit }) {
    const [values, setValues] = useState(movie);
    const dispatch = useDispatch();

    function handleChange(event) {
        console.log(event.target.value);
        setValues(prevValues => {
            return {
                ...prevValues,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleClick(event) {
        event.preventDefault();
        dispatch(editMovie(values));
        setShowEdit(prevstate => !prevstate);
    }

    return (  
        <section className="edit-movie">
            <h4>Edit Movie</h4>
            {/* <form> */}
                <label>Title</label>
                <input 
                    type="text"                 
                    onChange={handleChange}
                    name='title'
                    value={values.title}
                />
                <label>My Rating</label>
                <input 
                    type="text"                 
                    onChange={handleChange}
                    name='rating'
                    value={values.rating}
                />
                <Button children={'Save'} type={'primary'} onClick={handleClick}/>
            {/* </form> */}
        </section>
    );
}

export default EditMovie;