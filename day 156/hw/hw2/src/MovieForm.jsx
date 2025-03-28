import React, { useState, useEffect } from "react";

const MovieForm = ({ addMovie, updateMovie, currentMovie, setCurrentMovie }) => {
  const [movieDetails, setMovieDetails] = useState({ id: "", title: "", year: "", rating: "" });

  useEffect(() => {
    if (currentMovie) {
      setMovieDetails(currentMovie);
    } else {
      setMovieDetails({ id: "", title: "", year: "", rating: "" });
    }
  }, [currentMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieDetails.id) {
      updateMovie(movieDetails);
    } else {
      addMovie({ ...movieDetails, id: Date.now() });
    }
    setMovieDetails({ id: "", title: "", year: "", rating: "" });
    setCurrentMovie(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Movie Title"
        value={movieDetails.title}
        onChange={(e) => setMovieDetails({ ...movieDetails, title: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <input
        type="number"
        placeholder="Release Year"
        value={movieDetails.year}
        onChange={(e) => setMovieDetails({ ...movieDetails, year: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <input
        type="number"
        placeholder="Rating (1-10)"
        value={movieDetails.rating}
        onChange={(e) => setMovieDetails({ ...movieDetails, rating: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {movieDetails.id ? "Update Movie" : "Add Movie"}
      </button>
    </form>
  );
};

export default MovieForm;
