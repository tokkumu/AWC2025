import { Dispatch, SetStateAction } from 'react';
import { ChallengeData } from '../challenges/types';
import { ConfigData } from '../config/types';

export interface SettingsProps {
  configData: ConfigData;
  setConfigData: Dispatch<SetStateAction<ConfigData>>;
  challengeData: ChallengeData;
  setChallengeData: Dispatch<SetStateAction<ChallengeData>>;
}
