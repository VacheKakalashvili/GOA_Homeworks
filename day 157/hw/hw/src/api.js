import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getMovies = () => axios.get(`${API_URL}/movie-data`);
export const createMovie = (movie) => axios.post(`${API_URL}/movie-create`, movie);
export const updateMovie = (id, updatedMovie) => axios.put(`${API_URL}/movie-update/${id}`, updatedMovie);
export const deleteMovie = (id) => axios.delete(`${API_URL}/movie-delete/${id}`);