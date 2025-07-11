import React, { useEffect, useState } from 'react';
import Header from './Header';
import Config from './pages/config/Config';
import Challenges from './pages/challenges/Challenges';
import { ConfigData } from './pages/config/types';
import { ChallengeData } from './pages/challenges/types';
import { generateChallengeData } from './pages/challenges/data/data';
import Settings from './pages/settings/Settings';
import Stats from './pages/stats/Stats';
import ReactGA from 'react-ga4';
import Import from './pages/import/Import';

ReactGA.initialize('GT-KDTSJ7PP');

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Config');

  const pages = {
    Config: 'Config',
    Challenges: 'Challenges',
    Stats: 'Stats',
    Import: 'Import',
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
            config={configData}
          />
        )}
        {activeTab === 'Stats' && (
          <Stats configData={configData} challengeData={challengeData} />
        )}
        {activeTab === 'Import' && (
          <Import
            challengeData={challengeData}
            setChallengeData={setChallengeData}
          />
        )}
        {activeTab === 'Settings' && (
          <Settings
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
