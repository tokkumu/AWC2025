export interface ConfigData {
  username: string;
  completedAnime: string;
  timeZone: string;
  animeInForum: string;
  initialPostNumber: string;
  legend: {
    ptw: string;
    watching: string;
    completed: string;
  };
  minigames: {
    darts: boolean;
    bingo: boolean;
    bingo17: '17A' | '17B';
    bingo21: '21A' | '21B';
    plinko: boolean;
    whackamole: boolean;
    whackamoleRestrictions: string[];
    whackamole1: 'A' | 'B' | 'C' | 'D' | 'E';
    whackamole1Restrictions: string[];
    whackamole2: 'A' | 'B' | 'C' | 'D' | 'E';
    whackamole2Restrictions: string[];
    whackamole3: 'A' | 'B' | 'C' | 'D' | 'E';
    whackamole3Restrictions: string[];
    tarot: boolean;
    tarotEnding: '2.1' | '2.2' | '3.1' | '3.2';
    duckpond: boolean;
  };
}
