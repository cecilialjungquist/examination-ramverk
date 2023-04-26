import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './views/Layout';
import Home from './views/Home';
import AllMovies from './views/AllMovies';
import Movie from './views/Movie';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='all-movies' element={<AllMovies />} />
          <Route path=':title' element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
