import { useState } from "react";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";

function App() {
  const [movieToEdit, setMovieToEdit] = useState(null);

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Movie Manager</h1>
      <MovieForm movieToEdit={movieToEdit} onMovieAdded={() => setMovieToEdit(null)} />
      <MovieList onEdit={(movie) => setMovieToEdit(movie)} />
    </div>
  );
}

export default App;
