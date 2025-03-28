import React from "react";

const MovieList = ({ movies, deleteMovie, setCurrentMovie }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Movie List</h2>
      {movies.length > 0 ? (
        <ul className="space-y-4">
          {movies.map((movie) => (
            <li key={movie.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <p className="font-semibold">{movie.title}</p>
                <p className="text-sm text-gray-600">Released: {movie.year}</p>
                <p className="text-sm text-gray-600">Rating: {movie.rating}</p>
              </div>
              <div>
                <button
                  onClick={() => setCurrentMovie(movie)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteMovie(movie.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies added yet!</p>
      )}
    </div>
  );
};

export default MovieList;