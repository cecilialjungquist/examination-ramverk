import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setAllMovies: (state, action) => {
            console.log('Setting all movies');
            return action.payload;
        },
        addMovie: (state, action) => {
            state.unshift(action.payload);
            console.log('Adding movie', action.payload);
        },
        deleteMovie: (state, action) => {
            const index = state.findIndex(movie => movie.id === action.payload.id);
            console.log('Deleting movie', action.payload);
            state.splice(index, 1);
        },
        editMovie: (state, action) => {
            const index = state.findIndex(movie => movie.id === action.payload.id);
            console.log('Editing movie', action.payload);
            state.splice(index, 1, action.payload);
        }
    }
})

export const { setAllMovies, addMovie, deleteMovie, editMovie } = moviesSlice.actions;

export default moviesSlice.reducer;