import React from "react";

const SongList = ({ songs, deleteSong, setCurrentSong }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Playlist</h2>
      {songs.length > 0 ? (
        <ul className="space-y-4">
          {songs.map((song) => (
            <li key={song.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <p className="font-semibold">{song.title}</p>
                <p className="text-sm text-gray-600">Artist: {song.artist}</p>
                <p className="text-sm text-gray-600">Album: {song.album}</p>
              </div>
              <div>
                <button
                  onClick={() => setCurrentSong(song)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteSong(song.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No songs in your playlist yet!</p>
      )}
    </div>
  );
};

export default SongList;
