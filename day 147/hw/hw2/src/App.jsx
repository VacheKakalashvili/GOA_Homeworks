import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function SoccerClock() {
  const [isDark, setIsDark] = useState(true);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className='h-screen bg-green-500 dark:bg-black dark:text-white text-2xl flex flex-col items-center justify-center p-4'>
      <div className='absolute top-4 right-4 cursor-pointer' onClick={handleDarkMode}>
        <Moon size={30} className='hidden dark:block' color='white' />
        <Sun size={30} className='dark:hidden' />
      </div>
      
      <h1 className='text-4xl font-bold'>Soccer Match</h1>
      <p className='text-lg mt-2'>Time: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
      
      <div className='mt-4 flex space-x-8'>
        <div className='p-4 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 text-center'>
          <h2 className='text-2xl font-semibold'>Team A</h2>
          <p className='text-3xl'>{teamAScore}</p>
          <button onClick={() => setTeamAScore(teamAScore + 1)} className='mt-2 p-2 bg-blue-500 dark:bg-gray-700 text-white rounded'>+1</button>
        </div>
        <div className='p-4 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 text-center'>
          <h2 className='text-2xl font-semibold'>Team B</h2>
          <p className='text-3xl'>{teamBScore}</p>
          <button onClick={() => setTeamBScore(teamBScore + 1)} className='mt-2 p-2 bg-red-500 dark:bg-gray-700 text-white rounded'>+1</button>
        </div>
      </div>
      
      <div className='mt-6'>
        <button onClick={() => setIsRunning(!isRunning)} className='p-2 bg-yellow-500 dark:bg-gray-700 text-white rounded'>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={() => setTime(0)} className='ml-2 p-2 bg-gray-500 dark:bg-gray-700 text-white rounded'>Reset</button>
      </div>
    </div>
  );
}