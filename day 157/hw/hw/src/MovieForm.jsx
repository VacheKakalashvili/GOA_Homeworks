import { useState, useEffect } from "react";
import { createMovie, updateMovie } from "./api";

const MovieForm = ({ movieToEdit, onMovieAdded }) => {
  const [movie, setMovie] = useState({ title: "", director: "", year: "" });

  useEffect(() => {
    if (movieToEdit) setMovie(movieToEdit);
  }, [movieToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (movie.id) {
      await updateMovie(movie.id, movie);
    } else {
      await createMovie(movie);
    }
    setMovie({ title: "", director: "", year: "" });
    onMovieAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-3">{movie.id ? "Edit Movie" : "Add Movie"}</h2>
      <input type="text" placeholder="Title" value={movie.title} onChange={(e) => setMovie({ ...movie, title: e.target.value })} className="w-full p-2 border rounded mb-2" />
      <input type="text" placeholder="Director" value={movie.director} onChange={(e) => setMovie({ ...movie, director: e.target.value })} className="w-full p-2 border rounded mb-2" />
      <input type="number" placeholder="Year" value={movie.year} onChange={(e) => setMovie({ ...movie, year: e.target.value })} className="w-full p-2 border rounded mb-2" />
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">{movie.id ? "Update Movie" : "Add Movie"}</button>
    </form>
  );
};

export default MovieForm;
