import React, { useState, useEffect } from "react";
import SongList from "./SongList";
import SongForm from "./SongForm";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  // Load songs from localStorage when the app starts
  useEffect(() => {
    const savedSongs = JSON.parse(localStorage.getItem("songs")) || [];
    setSongs(savedSongs);
  }, []);

  // Save songs to localStorage whenever the songs list changes
  useEffect(() => {
    localStorage.setItem("songs", JSON.stringify(songs));
  }, [songs]);

  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  const updateSong = (updatedSong) => {
    setSongs(songs.map((song) => (song.id === updatedSong.id ? updatedSong : song)));
  };

  const deleteSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Spotify Playlist</h1>
      <SongForm
        addSong={addSong}
        updateSong={updateSong}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <SongList
        songs={songs}
        deleteSong={deleteSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default Home;
