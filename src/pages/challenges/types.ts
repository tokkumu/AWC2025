import { Dispatch, SetStateAction } from 'react';
import { ConfigData } from '../config/types';
import { AnimeData } from '../../types';
import { ValidationStatus } from './data/types';

export interface SidebarProps {
  minigames: { [key: string]: boolean };
  setCurrentMinigame: Dispatch<SetStateAction<string>>;
}

export interface ChallengeEntry {
  id: string;
  malId: string;
  startDate: string;
  endDate: string;
  extraInfo: string;
  challenges: string[];
  validationStatus: ValidationStatus;
}

export interface ChallengeData {
  [challengeId: string]: ChallengeEntry;
}

export interface MinigameProps {
  currentMinigame: string;
  challengeData: ChallengeData;
  setChallengeData: Dispatch<SetStateAction<ChallengeData>>;
  animeData: AnimeData;
  setAnimeData: Dispatch<SetStateAction<AnimeData>>;
  config: ConfigData;
}

export interface ChallengesProps {
  challengeData: ChallengeData;
  setChallengeData: Dispatch<SetStateAction<ChallengeData>>;
  animeData: AnimeData;
  setAnimeData: Dispatch<SetStateAction<AnimeData>>;
  config: ConfigData;
}
