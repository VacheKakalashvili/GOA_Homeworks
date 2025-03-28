import React, { useState, useEffect } from "react";

const SongForm = ({ addSong, updateSong, currentSong, setCurrentSong }) => {
  const [songDetails, setSongDetails] = useState({ id: "", title: "", artist: "" });

  useEffect(() => {
    if (currentSong) {
      setSongDetails(currentSong);
    } else {
      setSongDetails({ id: "", title: "", artist: "" });
    }
  }, [currentSong]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (songDetails.id) {
      updateSong(songDetails);
    } else {
      addSong({ ...songDetails, id: Date.now() });
    }
    // Reset form fields
    setSongDetails({ id: "", title: "", artist: "" });
    // Clear current song only if adding a new song
    if (!songDetails.id) {
      setCurrentSong(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Song Title"
        value={songDetails.title}
        onChange={(e) => setSongDetails({ ...songDetails, title: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <input
        type="text"
        placeholder="Artist Name"
        value={songDetails.artist}
        onChange={(e) => setSongDetails({ ...songDetails, artist: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {songDetails.id ? "Update Song" : "Add Song"}
      </button>
    </form>
  );
};

export default SongForm;