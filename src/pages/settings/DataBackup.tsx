import { Button, Input, Typography } from '@mui/material';
import { SettingsProps } from './types';
import { ChangeEvent, useRef } from 'react';

const DataBackup = (props: SettingsProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImport = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const importedData = JSON.parse(reader.result as string);
          if (!importedData.challengeData || !importedData.configData) {
            throw new Error('Invalid data');
          }
          props.setChallengeData(importedData.challengeData);
          props.setConfigData(importedData.configData);
        } catch (_err) {
          alert('Failed to import the file. Invalid JSON.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleExport = () => {
    const fileData = JSON.stringify(
      {
        challengeData: props.challengeData,
        configData: props.configData,
      },
      null,
      2
    );
    const blob = new Blob([fileData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.json';
    link.click();
  };

  return (
    <div>
      <Typography variant="h5" marginLeft="1%" marginTop="10px">
        Import/Export Data
      </Typography>
      <Typography variant="body1" marginLeft="1%">
        All data is stored in your browser's local storage but you may also back
        it up here
      </Typography>
      <Button
        onClick={handleImportClick}
        sx={{ backgroundColor: 'white', marginLeft: '1%', marginRight: '10px' }}
      >
        Import Data
      </Button>
      <Input
        type="file"
        onChange={handleImport}
        style={{ display: 'none' }}
        inputRef={fileInputRef}
      />
      <Button onClick={handleExport} sx={{ backgroundColor: 'white' }}>
        Export Data
      </Button>
    </div>
  );
};

export default DataBackup;
