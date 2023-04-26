import { useState } from "react";
import { useDispatch } from "react-redux";
import { editMovie } from "../store/slices/moviesSlice";

function EditMovie({ movie }) {
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
    }

    return (  
        <section>
            <h3>Edit Movie</h3>
            {/* <form> */}
                <label>Title</label>
                <input 
                    type="text"                 
                    onChange={handleChange}
                    name='title'
                    value={values.title}
                />
                <button onClick={handleClick}>Save</button>
            {/* </form> */}
        </section>
    );
}

export default EditMovie;