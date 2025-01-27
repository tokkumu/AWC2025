import { Typography } from '@mui/material';
import { StatsProps } from './types';
import { getEnabledChallenges } from '../challenges/data/data';

const Stats = (props: StatsProps) => {
  const getAnimeList = () =>
    Object.values(
      getEnabledChallenges(props.configData.minigames, props.challengeData)
    ).filter((c) => c.malId);

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
    </div>
  );
};

export default Stats;
