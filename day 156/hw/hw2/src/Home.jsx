import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);

  // Load movies from localStorage on startup
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(savedMovies);
  }, []);

  // Save movies to localStorage when the state changes
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie)));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Francis Ford Coppola Fan Site</h1>
      <MovieForm
        addMovie={addMovie}
        updateMovie={updateMovie}
        currentMovie={currentMovie}
        setCurrentMovie={setCurrentMovie}
      />
      <MovieList
        movies={movies}
        deleteMovie={deleteMovie}
        setCurrentMovie={setCurrentMovie}
      />
    </div>
  );
};

export default Home;
