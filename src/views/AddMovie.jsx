import './views.scss'
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch } from 'react-redux';
import { addMovie } from '../store/slices/moviesSlice';

function AddMovie() {
    const dispatch = useDispatch();
    const [newMovie, setNewMovie] = useState({
        id: nanoid(), 
        title: '', 
        director: '', 
        year: '', 
        img: '', 
        imdb: '', 
        rating: ''
    });

    function handleChange(event) {
        setNewMovie(prevMovie => {
            return {
                ...prevMovie,
                [event.target.name]: event.target.value
            };
        });
    };
    function handleClick(event) {
        event.preventDefault();
        dispatch(addMovie(newMovie));
    }

    return (
        <main className="add-movie">
            <h2>Add Movie</h2>
            <section>
                <form>
                    <Input 
                        name={'title'} 
                        type={'text'} 
                        handleChange={handleChange}
                        value={newMovie.title}
                    />
                    <Input 
                        name={'director'} 
                        type={'text'} 
                        handleChange={handleChange}
                        value={newMovie.director}
                    />
                    <Input 
                        name={'year'} 
                        type={'number'} 
                        handleChange={handleChange}
                        value={newMovie.year}
                    />
                    <Input 
                        name={'img'} 
                        type={'url'} 
                        handleChange={handleChange}
                        value={newMovie.img}
                    />
                    <Input 
                        name={'imdb'} 
                        type={'url'} 
                        handleChange={handleChange}
                        value={newMovie.imdb}
                    />
                    <Input 
                        name={'rating'} 
                        type={'number'} 
                        handleChange={handleChange}
                        value={newMovie.rating}
                    />
                </form>
                <div className='primary-btn-container'>
                    <Button children={'Add movie'} type={'primary'} onClick={handleClick} />
                </div>
            </section>
        </main>
    );
}

export default AddMovie;