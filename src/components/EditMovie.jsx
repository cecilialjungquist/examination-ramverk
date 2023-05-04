import './_EditMovie.scss';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editMovie } from "../store/slices/moviesSlice";
import Button from './Button';
import Input from './Input';

function EditMovie({ movie, setShowEdit }) {
    const [values, setValues] = useState(movie);
    const dispatch = useDispatch();

    function handleChange(event) {
        setValues(prevValues => {
            return {
                ...prevValues,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSave(event) {
        event.preventDefault();
        dispatch(editMovie(values));
        setShowEdit(prevstate => !prevstate);
    }
    function handleCancel(event) {
        event.preventDefault();
        setShowEdit(prevstate => !prevstate);
    }

    return (
        <section className="edit-movie">
            <h4>Edit Movie</h4>
            <Input
                name={'img'}
                type={'text'}
                handleChange={handleChange}
                value={values.img}
            />
            <Input
                name={'rating'}
                type={'number'}
                handleChange={handleChange}
                value={values.rating}
            />
            <section className='textarea-container'>
                <textarea 
                    name="comment" 
                    onChange={handleChange}
                    value={values.comment} 
                    cols="30" 
                    rows="10"
                />
            </section>
            <section className='btn-section'>
                <Button children={'Cancel'} type={'delete'} onClick={handleCancel} />
                <Button children={'Save'} type={'edit'} onClick={handleSave} />
            </section>
        </section>
    );
}

export default EditMovie;