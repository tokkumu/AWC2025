import { AnimeDetails } from '../../../types';
import { ConfigData } from '../../config/types';
import { ChallengeEntry } from '../types';

export type Challenge = {
  bbCode: string;
  description: string;
  addlInfo: string[];
  defaultExtraInfo?: string;
  minigames: string[];
  validators: Validator[];
};
export type ChallengeList = { [challengeId: string]: Challenge };

export type ValidatorStatus = { criterion: string; valid: boolean };

export type ValidationStatus = {
  valid: boolean;
  success: string[];
  error: string[];
};

export interface ValidatorParams {
  anime: AnimeDetails;
  config: ConfigData;
  entry: ChallengeEntry;
}

export type Validator = (params: ValidatorParams) => ValidatorStatus;
