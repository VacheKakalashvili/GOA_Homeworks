import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);

  const handleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className='h-screen bg-blue-500 dark:bg-black dark:text-white text-2xl flex flex-col items-center justify-center p-4'>
      <div className='absolute top-4 right-4 cursor-pointer' onClick={handleDarkMode}>
        <Moon size={30} className='hidden dark:block' color='white' />
        <Sun size={30} className='dark:hidden' />
      </div>
      
      <h1 className='text-4xl font-bold'>Vache Kakalashvili</h1>
      <p className='text-lg mt-2'>Age: 14</p>
      <p className='text-lg mt-2'>Aspiring Developer</p>
      
      <div className='mt-4 p-4 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700'>
        <h2 className='text-2xl font-semibold'>Knowledge</h2>
        <ul className='list-disc list-inside mt-2'>
          <li>JavaScript: Starter</li>
          <li>CSS: Mediocre</li>
          <li>HTML: Mediocre</li>
          <li>Python: Mediocre</li>
        </ul>
      </div>

      <div className='mt-6 p-4 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 w-full max-w-md'>
        <h2 className='text-2xl font-semibold'>About Me</h2>
        <p className='mt-2 text-lg'>I am a 14-year-old aspiring developer passionate about coding and improving my skills in web development and programming.</p>
      </div>
    </div>
  );
}