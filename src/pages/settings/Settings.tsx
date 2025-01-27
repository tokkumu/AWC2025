import { Button, Typography } from '@mui/material';
import { SettingsProps } from './types';
import { generateBBCode } from './utils';
import DataBackup from './DataBackup';
import ListImport from './ListImport';
import { loadAnime } from '../../utils';
import { useState } from 'react';

const Settings = (props: SettingsProps) => {
  const [loading, setLoading] = useState(false);

  const onLoadAnime = async () => {
    setLoading(true);
    for (const [challengeId, entry] of Object.entries(props.challengeData)) {
      if (!entry.malId || entry.animeData) continue;
      const animeData = await loadAnime(entry.malId);

      props.setChallengeData((challengeData) => ({
        ...challengeData,
        [challengeId]: {
          ...entry,
          animeData,
        },
      }));

      await new Promise((resolve) => setTimeout(resolve, 2400));
    }
    setLoading(false);
  };

  return (
    <div>
      <ListImport {...props} />

      <DataBackup {...props} />

      <Typography variant="h5" marginLeft="1%" marginTop="10px">
        Load Anime
      </Typography>
      <Typography variant="body1" marginLeft="1%">
        Load all anime which have a MAL Id specified but have not loaded the
        anime's data.
      </Typography>
      <Button
        disabled={loading}
        onClick={onLoadAnime}
        sx={{ backgroundColor: 'white', marginLeft: '1%', marginRight: '10px' }}
      >
        Load Anime
      </Button>

      <Typography variant="h5" marginLeft="1%" marginTop="10px">
        Output BBCode
      </Typography>
      <textarea
        readOnly
        style={{
          width: '98%',
          marginLeft: '1%',
          marginBottom: '20px',
          height: '200px',
          resize: 'none',
        }}
        value={generateBBCode(props.challengeData, props.configData)}
      />
    </div>
  );
};

export default Settings;
