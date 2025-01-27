import { Dispatch, SetStateAction } from 'react';
import { ConfigData } from '../config/types';
import { AnimeDetails } from '../../types';

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
  minigames: string[];
  animeData?: AnimeDetails;
}

export interface ChallengeData {
  [challengeId: string]: ChallengeEntry;
}

export interface MinigameProps {
  currentMinigame: string;
  challengeData: ChallengeData;
  setChallengeData: Dispatch<SetStateAction<ChallengeData>>;
  config: ConfigData;
}

export interface ChallengesProps {
  challengeData: ChallengeData;
  setChallengeData: Dispatch<SetStateAction<ChallengeData>>;
  config: ConfigData;
}
