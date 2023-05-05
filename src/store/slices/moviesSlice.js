import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setAllMovies: (state, action) => {
            return action.payload;
        },
        addMovie: (state, action) => {
            state.unshift(action.payload);
        },
        deleteMovie: (state, action) => {
            const index = state.findIndex(movie => movie.id === action.payload.id);
            state.splice(index, 1);
        },
        editMovie: (state, action) => {
            const index = state.findIndex(movie => movie.id === action.payload.id);
            state.splice(index, 1, action.payload);
        }
    }
})

export const { setAllMovies, addMovie, deleteMovie, editMovie } = moviesSlice.actions;

export default moviesSlice.reducer;