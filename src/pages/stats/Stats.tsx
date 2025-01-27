import { Typography } from '@mui/material';
import { StatsProps } from './types';
import {
  getEnabledChallenges,
  getEnabledMinigames,
  MINIGAME_DATA,
} from '../challenges/data/data';
import StatsProgressBar from './StatsProgressBar';

const Stats = (props: StatsProps) => {
  const getAnimeList = () =>
    Object.values(
      getEnabledChallenges(props.configData.minigames, props.challengeData)
    ).filter((c) => c.malId);

  const getAnimeListForMinigame = (minigame: string) =>
    Object.values(getAnimeList()).filter((c) => c.minigames.includes(minigame));
  return (
    <div className="stats">
      <Typography variant="h4">Stats - Work In Progress</Typography>
      <Typography variant="h6">Summary</Typography>
      <Typography variant="body1">
        Total Episodes:{' '}
        {getAnimeList().reduce(
          (acc, challenge) => acc + (challenge.animeData?.episodes ?? 0),
          0
        )}
      </Typography>
      <Typography variant="body1">
        Remaining Episodes:{' '}
        {getAnimeList().reduce(
          (acc, challenge) =>
            acc +
            (challenge.animeData?.episodes ?? 0) * (challenge.endDate ? 0 : 1),
          0
        )}
      </Typography>
      <Typography variant="body1">Average Duration:</Typography>
      <Typography variant="body1">Average Remaining Duration:</Typography>
      <Typography variant="h6">Progress</Typography>
      {Object.entries(getEnabledMinigames(props.configData.minigames)).map(
        ([minigame, enabled]) => {
          return (
            <div key={minigame} hidden={!enabled}>
              <Typography key={`${minigame}-label`} variant="h6">
                {minigame} - Required Challenges:{' '}
                {MINIGAME_DATA[minigame].required}
              </Typography>
              <StatsProgressBar
                key={`${minigame}-progress-bar`}
                ptw={getAnimeListForMinigame(minigame).reduce(
                  (acc, challenge) => {
                    return acc + (!challenge.startDate ? 1 : 0);
                  },
                  0
                )}
                watching={getAnimeListForMinigame(minigame).reduce(
                  (acc, challenge) => {
                    return (
                      acc + (challenge.startDate && !challenge.endDate ? 1 : 0)
                    );
                  },
                  0
                )}
                complete={getAnimeListForMinigame(minigame).reduce(
                  (acc, challenge) => {
                    return acc + (challenge.endDate ? 1 : 0);
                  },
                  0
                )}
                required={MINIGAME_DATA[minigame].required}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Stats;
