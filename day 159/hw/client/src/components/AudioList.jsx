import axios from 'axios';

function AudioList({ audios, onDelete }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/audio/${id}`);
      onDelete(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ul className="space-y-4">
      {audios.map((audio) => (
        <li key={audio._id} className="p-4 border rounded flex justify-between items-center">
          <audio controls src={`http://localhost:5000/uploads/${audio.filename}`} className="mr-4" />
          <button
            onClick={() => handleDelete(audio._id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AudioList;