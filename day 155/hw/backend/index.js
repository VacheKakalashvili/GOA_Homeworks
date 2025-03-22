const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const words = ['apple', 'grape', 'lemon', 'mango', 'peach', 'berry']; // Add more words as needed

app.get('/api/word', (req, res) => {
    const words = ['apple', 'grape', 'lemon', 'mango', 'peach', 'berry'];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    res.json({ word: randomWord });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
