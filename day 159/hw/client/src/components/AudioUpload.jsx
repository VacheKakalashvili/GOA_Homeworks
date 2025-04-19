import { useState } from 'react';
import axios from 'axios';

function AudioUpload({ onUpload }) {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('audio', file);

        try {
            const res = await axios.post('http://localhost:5000/api/audio/upload', formData);
            onUpload(res.data);
            setFile(null);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="file"
                accept="audio/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"  // Hide the default input
                id="file-input"     // Give it a unique ID
            />
            <label
                htmlFor="file-input"  // Make the label trigger the file input
                className="cursor-pointer bg-gray-200 text-black px-4 py-2 rounded mb-4"
            >
                Choose a file
            </label>
            <button
                onClick={handleUpload}
                className="bg-blue-500 text-white px-6 py-3 rounded"
            >
                Upload Audio
            </button>
        </div>

    );
}

export default AudioUpload;