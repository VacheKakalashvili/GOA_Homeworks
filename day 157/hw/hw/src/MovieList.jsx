import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "./api";

const MovieList = ({ onEdit }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const { data } = await getMovies();
    setMovies(data);
  };

  const handleDelete = async (id) => {
    await deleteMovie(id);
    fetchMovies();
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Movie List</h2>
      {movies.map((movie) => (
        <div key={movie.id} className="bg-gray-100 p-3 rounded shadow mb-2 flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p>{movie.director} ({movie.year})</p>
          </div>
          <div>
            <button onClick={() => onEdit(movie)} className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
            <button onClick={() => handleDelete(movie.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;