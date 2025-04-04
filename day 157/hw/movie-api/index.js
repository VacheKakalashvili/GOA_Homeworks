const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy movie database (in-memory)
let movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  { id: 2, title: "The Matrix", director: "The Wachowskis", year: 1999 },
];

// 1) GET: Fetch all movies
app.get("/api/movie-data", (req, res) => {
  res.json(movies);
});

// 2) POST: Add a new movie
app.post("/api/movie-create", (req, res) => {
  const { title, director, year } = req.body;
  if (!title || !director || !year) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newMovie = {
    id: movies.length + 1,
    title,
    director,
    year,
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// 3) PUT: Update a movie by ID
app.put("/api/movie-update/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year } = req.body;

  const movie = movies.find((m) => m.id === parseInt(id));
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  if (title) movie.title = title;
  if (director) movie.director = director;
  if (year) movie.year = year;

  res.json(movie);
});

// 4) DELETE: Remove a movie by ID
app.delete("/api/movie-delete/:id", (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((m) => m.id === parseInt(id));

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const deletedMovie = movies.splice(movieIndex, 1);
  res.json({ message: "Movie deleted successfully", deletedMovie });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
