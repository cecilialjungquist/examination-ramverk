import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.push(action.payload);
            console.log('Adding movie', action.payload);
        },
        deleteMovie: (state, action) => {
            const index = state.findIndex(movie => movie.id = action.payload.id);
            console.log('Deleting movie', action.payload);
            state.splice(index, 1);
        },
        editMovie: (state, action) => {
            const index = state.findIndex(movie => movie.id = action.payload.id);
            console.log('Editing movie', action.payload);
            state.splice(index, 1, action.payload);
        }
    }
})

export const { addMovie, deleteMovie, editMovie } = moviesSlice.actions;

export default moviesSlice.reducer;