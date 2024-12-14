import React, {useState} from 'react';
import "./App.css";
import MovieList from './components/MovieList';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "The Avengers One",
      genre: "Ciencia Ficción",
      image: "venga 1.jpg",
    },
    {
      id: 2,
      title: "The Avengers Two",
      genre: "Ciencia Ficción",
      image: "venga 2.jpg",
    },
    {
      id: 3,
      title: "The Avengers Three",
      genre: "Ciencia Ficción",
      image: "venga 4.jpg",
    },
    {
      id: 4,
      title: "The Avengers Four",
      genre: "Ciencia Ficción",
      image: "venga 3.jpg",
    },
    {
      id: 5,
      title: "Loki Season one",
      genre: "Ciencia Ficción",
      image: "loki 1.jpg",
    },
    {
      id: 6,
      title: "Loki Season Two",
      genre: "Ciencia Ficción",
      image: "loki 2.jpg",
    },
    {
      id: 7,
      title: "What if Season One",
      genre: "Ciencia Ficción",
      image: "what 1.jpg",
    },
    {
      title: "What if Season Two",
      genre: "Ciencia Ficción",
      image: "what 2.jpg",
    },
    {
      title: "Termineitor",
      genre: "Ciencia Ficción",
      image: "termineitor.jpg",
    }
    
  ]);
  return(
    <div className="app-container">
      <h1 className="app-title">🎬 FilmFusion</h1>
      <MovieList movies={movies} />
      <Footer/>
    </div>
  );
};

export default App;