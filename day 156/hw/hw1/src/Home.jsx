import React, { useState } from "react";
import SongList from "./Songlist";
import SongForm from "./SongForm";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

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
      <h1 className="text-3xl font-bold mb-4">Frank Sinatra Fan Site</h1>
      <SongForm
        addSong={addSong}
        updateSong={updateSong}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <SongList songs={songs} deleteSong={deleteSong} setCurrentSong={setCurrentSong} />
    </div>
  );
};

export default Home;