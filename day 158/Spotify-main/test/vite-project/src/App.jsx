import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios"

function App() {
    const [getMusic, setGetMusic] = useState(null)
    useEffect(() => {
        const getMusicData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/music/video-1`, {
                    responseType: 'blob',
                });
                console.log(response.data);
                const audioUrl = URL.createObjectURL(response.data);
                setGetMusic(audioUrl);
            } catch (err) {
                console.error("Failed to fetch audio:", err);
            }
        };
        getMusicData();
    }, []);

    return (
        <>
            <h1>Audio Player</h1>
            {getMusic ? (
                <div>
                    <video className="w-40" controls src={getMusic}></video>
                </div>
            ) : <>...loading</>}
        </>

    )
}

export default App
