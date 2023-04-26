import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './views/Layout';
import Home from './views/Home';
import AllMovies from './views/AllMovies';
import Movie from './views/Movie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllMovies } from './store/slices/moviesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('./data.json');
        const data = await response.json();
        dispatch(setAllMovies(data.movies));
      } catch (error) {
        console.log(error);
        // Hantera felet bättre! Vad händer i UI?
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='all-movies' element={<AllMovies />}/>
          <Route path=':id' element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
