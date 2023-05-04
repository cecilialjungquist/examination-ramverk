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
        },
        addMovieComment: (state, action) => {
            const index = state.findIndex(movie => movie.id === action.payload.id);
            state[index].comments.unshift(action.payload.newComment);
            console.log('Adding comment', action.payload.newComment);
        },
        deleteMovieComment: (state, action) => {
            const index = state.findIndex(movie => movie.id === action.payload.id);
            console.log('Deleting comment', action.payload.newComment);
        }
    }
})

export const { setAllMovies, addMovie, deleteMovie, editMovie, addMovieComment, deleteMovieComment } = moviesSlice.actions;

export default moviesSlice.reducer;