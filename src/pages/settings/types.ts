import { Dispatch, SetStateAction } from 'react';
import { AnimeData } from '../../types';
import { ChallengeData } from '../challenges/types';
import { ConfigData } from '../config/types';

export interface SettingsProps {
  configData: ConfigData;
  setConfigData: Dispatch<SetStateAction<ConfigData>>;
  challengeData: ChallengeData;
  setChallengeData: Dispatch<SetStateAction<ChallengeData>>;
  animeData: AnimeData;
  setAnimeData: Dispatch<SetStateAction<AnimeData>>;
}
