import { useEffect, useState } from 'react';
import axios from 'axios';
import AudioUpload from './components/AudioUpload';
import AudioList from './components/AudioList';

function App() {
  const [audios, setAudios] = useState([]);

  const fetchAudios = async () => {
    const res = await axios.get('http://localhost:5000/api/audio');
    setAudios(res.data);
  };

  useEffect(() => {
    fetchAudios();
  }, []);

  const handleUpload = (newAudio) => {
    setAudios([newAudio, ...audios]);
  };

  const handleDelete = (id) => {
    setAudios(audios.filter(audio => audio._id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🎵 Audio Uploader</h1>
      <AudioUpload onUpload={handleUpload} />
      <AudioList audios={audios} onDelete={handleDelete} />
    </div>
  );
}

export default App;