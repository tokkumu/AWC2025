import { Typography } from '@mui/material';
import { SettingsProps } from './types';
import { generateBBCode } from './utils';
import DataBackup from './DataBackup';
import ListImport from './ListImport';

const Settings = (props: SettingsProps) => {
  return (
    <div>
      <ListImport {...props} />

      <DataBackup {...props} />

      <Typography variant="h5" marginLeft="1%" marginTop="10px">
        Output BBCode
      </Typography>
      {
        <textarea
          style={{
            width: '98%',
            marginLeft: '1%',
            marginBottom: '20px',
            height: '200px',
            resize: 'none',
          }}
        >
          {generateBBCode(
            props.animeData,
            props.challengeData,
            props.configData
          )}
        </textarea>
      }
    </div>
  );
};

export default Settings;
