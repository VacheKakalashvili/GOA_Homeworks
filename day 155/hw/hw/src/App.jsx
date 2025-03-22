import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WordleClone = () => {
  const [word, setWord] = useState('');
  const [input, setInput] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/word'); // Backend API endpoint
      setWord(response.data.word.toUpperCase());
    } catch (err) {
      setError('Failed to fetch the word. Please try again later.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length !== word.length) {
      setError(`Your guess must be ${word.length} letters long.`);
      return;
    }

    setError('');
    const result = input.toUpperCase().split('').map((char, index) => {
      if (char === word[index]) return { char, status: 'correct' };
      if (word.includes(char)) return { char, status: 'present' };
      return { char, status: 'absent' };
    });

    setGuesses([...guesses, result]);
    setInput('');

    if (input.toUpperCase() === word) setIsCorrect(true);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Wordle Clone</h1>
      {error && <p className="text-red-500">{error}</p>}
      {isCorrect ? (
        <p className="text-green-500 text-xl">Congratulations! You guessed the word!</p>
      ) : (
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={word.length}
            className="p-2 border rounded"
            placeholder={`Guess the ${word.length}-letter word`}
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      )}
      <div className="flex flex-col gap-4">
        {guesses.map((guess, index) => (
          <div key={index} className="p-2 border rounded-lg shadow bg-white">
            <div className="flex gap-2">
              {guess.map((letter, i) => (
                <span
                  key={i}
                  className={`p-2 rounded text-white font-bold ${letter.status === 'correct'
                      ? 'bg-green-500'
                      : letter.status === 'present'
                        ? 'bg-yellow-500'
                        : 'bg-gray-500'
                    }`}
                >
                  {letter.char}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordleClone;
