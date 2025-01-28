export type AnimeDetails = {
  timestamp: number;
  malId: number;
  title: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  aired: {
    day: string;
    time: string;
    from: {
      year: number;
      month: number;
      day: number;
    };
    to: {
      year: number;
      month: number;
      day: number;
    };
  };
  duration: string;
  episodeDurationMinutes: number;
  rating: string;
  score: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  season: string;
  year: number;
  genres: string[];
  themes: string[];
  demographics: string[];
  openingCount: number;
  endingCount: number;
  mainCharacters: number;
  supportingCharacters: number;
};
