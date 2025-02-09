import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import scorpionImage from './assets/scorpion.jpg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id='movie'>
      <h1>Scorpion</h1>
      <img src={scorpionImage} alt="Scorpion" className="scorpion-image" />
      <p>
        Scorpion is a television series that premiered in 2014 and ran for four seasons. It centers around a group of brilliant misfits, led by Walter O'Brien, a genius with a high IQ and a knack for problem-solving. The team includes Sylvester Dodd, who excels in mathematics; Paige Dineen, a waitress with a natural talent for understanding people; Tobias "Toby" Curtis, a behavioral psychologist; Happy Quinn, a skilled mechanical engineer; and Ralph Dineen, a young math prodigy. Together, they tackle complex global issues and national security threats.
        <br /><br />
        While the team members excel in their intellectual pursuits, they often struggle with social interactions and everyday life. To balance their abilities, Paige helps them navigate social situations. Together, they form a unique partnership, using their combined strengths to address challenges ranging from cyber threats to terrorism, all while facing their own personal growth and relationships. The show blends action, drama, and humor, highlighting the importance of teamwork and friendship in overcoming obstacles.
      </p>
    </div>
  );
}

export default App;
