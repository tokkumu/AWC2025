import { Dispatch, SetStateAction } from 'react';
import { ChallengeData } from '../challenges/types';

export type AnimeExport = {
  my_comments: string;
  my_discuss: string;
  my_finish_date: string;
  my_id: string;
  my_priority: string;
  my_rated: string;
  my_rewatch_value: string;
  my_rewatching_ep: string;
  my_score: string;
  my_sns: string;
  my_start_date: string;
  my_status: string;
  my_storage: string;
  my_storage_value: string;
  my_tags: string;
  my_times_watched: string;
  my_watched_episodes: string;
  series_animedb_id: string;
  series_episodes: string;
  series_title: string;
  series_type: string;
  update_on_import: string;
};

export type AnimeExportRawData = {
  myanimelist: {
    anime: {
      [P in keyof AnimeExport]: P[];
    }[];
  };
};

export interface ImportProps {
  challengeData: ChallengeData;
  setChallengeData: Dispatch<SetStateAction<ChallengeData>>;
}

export interface ListImportProps extends ImportProps {
  setData: Dispatch<SetStateAction<AnimeExport[]>>;
}

export interface ImportTableProps {
  challengeData: ChallengeData;
  data: AnimeExport[];
}
