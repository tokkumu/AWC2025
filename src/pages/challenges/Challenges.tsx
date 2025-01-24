import { useState } from 'react';
import { getEnabledMinigames } from './data/data';
import Sidebar from './Sidebar';
import { ChallengesProps } from './types';
import Minigame from './Minigame';
import './Challenges.css';

function Challenges(props: ChallengesProps) {
  const [currentMinigame, setCurrentMinigame] = useState<string>('');

  return (
    <div className="App">
      <div className="container">
        <Sidebar
          minigames={getEnabledMinigames(props.config.minigames)}
          setCurrentMinigame={setCurrentMinigame}
        />
        <div className="separator"></div>
        <Minigame currentMinigame={currentMinigame} {...props} />
      </div>
    </div>
  );
}

export default Challenges;
