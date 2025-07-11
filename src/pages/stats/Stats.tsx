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
    getAnimeList().filter((c) => c.minigames.includes(minigame));

  return (
    <div className="stats">
      <Typography variant="h4">Stats</Typography>
      <Typography variant="h5">Summary</Typography>
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
      <br />
      <Typography variant="h5">Progress</Typography>
      <Typography variant="h6">
        Overall - Required Challenges:{' '}
        {Object.entries(getEnabledMinigames(props.configData.minigames)).reduce(
          (acc, [minigame, enabled]) =>
            acc + (enabled ? MINIGAME_DATA[minigame].required : 0),
          0
        )}
      </Typography>
      <StatsProgressBar
        ptw={getAnimeList().reduce((acc, challenge) => {
          return acc + (!challenge.startDate ? 1 : 0);
        }, 0)}
        watching={getAnimeList().reduce((acc, challenge) => {
          return acc + (challenge.startDate && !challenge.endDate ? 1 : 0);
        }, 0)}
        complete={getAnimeList().reduce((acc, challenge) => {
          return acc + (challenge.endDate ? 1 : 0);
        }, 0)}
        required={Object.entries(
          getEnabledMinigames(props.configData.minigames)
        ).reduce(
          (acc, [minigame, enabled]) =>
            acc + (enabled ? MINIGAME_DATA[minigame].required : 0),
          0
        )}
      />
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
