import React, { useEffect, useState } from 'react';
import Header from './Header';
import Config from './pages/config/Config';
import Challenges from './pages/challenges/Challenges';
import { ConfigData } from './pages/config/types';
import { Typography } from '@mui/material';
import { ChallengeData } from './pages/challenges/types';
import { generateChallengeData } from './pages/challenges/data/data';
import { AnimeData } from './types';
import Settings from './pages/settings/Settings';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Config');

  const pages = {
    Config: 'Config',
    Challenges: 'Challenges',
    Stats: 'Stats',
    Settings: 'Settings',
  };

  const savedConfigData = localStorage.getItem('configData');
  const [configData, setConfigData] = useState<ConfigData>(
    savedConfigData
      ? JSON.parse(savedConfigData)
      : {
          username: '',
          completedAnime: '',
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          animeInForum: '',
          initialPostNumber: '000',
          legend: {
            ptw: 'GRAY',
            watching: 'MEDIUMPURPLE',
            completed: 'SEAGREEN',
          },
          minigames: {
            darts: false,
            bingo: false,
            bingo17: '17A',
            bingo21: '21A',
            plinko: false,
            whackamole: false,
            whackamoleRestrictions: [],
            whackamole1: 'A',
            whackamole1Restrictions: [],
            whackamole2: 'B',
            whackamole2Restrictions: [],
            whackamole3: 'C',
            whackamole3Restrictions: [],
            tarot: false,
            tarotEnding: '2.1',
            duckpond: false,
          },
        }
  );

  useEffect(() => {
    localStorage.setItem('configData', JSON.stringify(configData));
  }, [configData]);

  const savedChallengeData = localStorage.getItem('challengeData');
  const [challengeData, setChallengeData] = useState<ChallengeData>(
    savedChallengeData
      ? JSON.parse(savedChallengeData)
      : generateChallengeData()
  );

  useEffect(() => {
    localStorage.setItem('challengeData', JSON.stringify(challengeData));
  }, [challengeData]);

  const savedAnimeData = localStorage.getItem('animeData');
  const [animeData, setAnimeData] = useState<AnimeData>(
    savedAnimeData ? JSON.parse(savedAnimeData) : {}
  );

  useEffect(() => {
    localStorage.setItem('animeData', JSON.stringify(animeData));
  }, [animeData]);

  const handlePageClick = (page: string): void => {
    setActiveTab(page);
  };

  return (
    <div className="app-container">
      <Header pages={pages} onPageSelect={handlePageClick} />
      <div className="page-content">
        {activeTab === 'Config' && (
          <Config configData={configData} setConfigData={setConfigData} />
        )}
        {activeTab === 'Challenges' && (
          <Challenges
            challengeData={challengeData}
            setChallengeData={setChallengeData}
            animeData={animeData}
            setAnimeData={setAnimeData}
            config={configData}
          />
        )}
        {activeTab === 'Stats' && <Typography>Coming Soon</Typography>}
        {activeTab === 'Settings' && (
          <Settings
            animeData={animeData}
            setAnimeData={setAnimeData}
            challengeData={challengeData}
            setChallengeData={setChallengeData}
            configData={configData}
            setConfigData={setConfigData}
          />
        )}
      </div>
    </div>
  );
};

export default App;
