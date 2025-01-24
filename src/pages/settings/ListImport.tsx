import { Button, Input, Typography } from '@mui/material';
import { SettingsProps } from './types';
import { ChangeEvent, useRef } from 'react';
import pako from 'pako';
import * as xml2js from 'xml2js';

const ListImport = (props: SettingsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateList = (list: any) => {
    const {
      myanimelist: { anime: animeList },
    } = list;
    for (const anime of animeList) {
      const animeId = anime.series_animedb_id[0];

      const challenge = Object.values(props.challengeData).find(
        (challenge) => challenge.malId === animeId
      );

      if (!challenge) {
        continue;
      }

      const startDate =
        anime.my_start_date[0] === '0000-00-00' ? '' : anime.my_start_date[0];
      const endDate =
        anime.my_finish_date[0] === '0000-00-00' ? '' : anime.my_finish_date[0];

      props.setChallengeData((challengeData) => ({
        ...challengeData,
        [challenge.id]: {
          ...challengeData[challenge.id],
          startDate: startDate ?? '',
          endDate: endDate ?? '',
        },
      }));
    }
  };

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
          const compressedData = new Uint8Array(reader.result as ArrayBuffer);
          const decompressedData = pako.ungzip(compressedData, {
            to: 'string',
          });

          xml2js.parseString(decompressedData, (err, result) => {
            if (err) {
              alert('Failed to parse XML.');
            } else {
              updateList(result);
            }
          });
        } catch (error) {
          console.error(error);
          alert('Failed to decompress or parse the file.');
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <Typography variant="h5" marginLeft="1%">
        Import/Export List
      </Typography>
      <Typography variant="body1" marginLeft="1%">
        This will automatically fill in start/end dates. You can export your
        list data here:{' '}
        <a href="https://myanimelist.net/panel.php?go=export">Link</a>
      </Typography>
      <Button
        onClick={handleImportClick}
        sx={{ backgroundColor: 'white', marginLeft: '1%', marginRight: '10px' }}
      >
        Import List
      </Button>
      <Input
        type="file"
        onChange={handleImport}
        style={{ display: 'none' }}
        inputRef={fileInputRef}
      />
    </div>
  );
};

export default ListImport;
