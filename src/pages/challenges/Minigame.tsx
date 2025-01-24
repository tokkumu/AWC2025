import {
  Typography,
  Box,
  TextField,
  Button,
  Tooltip,
  styled,
  TooltipProps,
  tooltipClasses,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { MinigameProps } from './types';
import { CHALLENGE_LIST, MINIGAME_DATA } from './data/data';
import { validateAnime } from './data/validators';
import { Fragment, useState } from 'react';
import './Minigame.css';
import { AnimeDetails } from '../../types';
import { Settings } from '@mui/icons-material';
import EditAnimeModal from './EditAnimeModal';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const Minigame = (props: MinigameProps) => {
  if (!props.currentMinigame) {
    return (
      <div className="main-content">
        <h1>Choose a Mini-Game</h1>
      </div>
    );
  }

  const [openModals, setOpenModals] = useState<{
    [challengeId: string]: boolean;
  }>({});

  const handleChange = (challengeId: string, key: string, value: string) => {
    const animeId = key === 'malId' ? value : getChallenge(challengeId).malId;

    const newChallengeData = {
      ...props.challengeData[challengeId],
      [key]: value,
    };

    const validationStatus = props.animeData[animeId]
      ? validateAnime(
          props.animeData[animeId],
          props.config,
          newChallengeData,
          CHALLENGE_LIST[challengeId].validators ?? []
        )
      : { valid: false, success: [], error: ['Anime not found'] };

    props.setChallengeData((challengeData) => ({
      ...challengeData,
      [challengeId]: {
        ...challengeData[challengeId],
        [key]: value,
        validationStatus,
      },
    }));
  };

  const modalOnSave = (challengeId: string, animeDetails: AnimeDetails) => {
    props.setAnimeData((animeData) => ({
      ...animeData,
      [animeDetails.malId]: animeDetails,
    }));

    const validationStatus = validateAnime(
      animeDetails,
      props.config,
      getChallenge(challengeId),
      CHALLENGE_LIST[challengeId].validators ?? []
    );

    props.setChallengeData((challengeData) => ({
      ...challengeData,
      [challengeId]: {
        ...challengeData[challengeId],
        validationStatus,
      },
    }));
  };

  const getChallenge = (challengeId: string) =>
    props.challengeData[challengeId];
  const getAnime = (challengeId: string) =>
    props.animeData[getChallenge(challengeId).malId];

  const getCurrentMinigame = () => {
    return Object.entries(CHALLENGE_LIST).filter(([_id, c]) =>
      c.minigames.includes(props.currentMinigame)
    );
  };

  const loadAnime = async (malId: string, challengeId: string) => {
    if (!malId || isNaN(+malId)) {
      return;
    }

    const { data } = await (
      await fetch(`https://api.jikan.moe/v4/anime/${malId}/full`)
    ).json();

    const charactersData = await (
      await fetch(`https://api.jikan.moe/v4/anime/${malId}/characters`)
    ).json();

    if (!data) {
      return;
    }

    const updatedEntry: AnimeDetails = {
      timestamp: Date.now(),
      malId: data.mal_id,
      title: data.title,
      type: data.type,
      source: data.source,
      episodes: data.episodes,
      status: data.status,
      aired: {
        day: data.broadcast.day ?? data.broadcast.string,
        time: data.broadcast.time,
        from: data.aired.prop.from,
        to: data.aired.prop.to,
      },
      duration: data.duration,
      rating: data.rating,
      score: data.score,
      rank: data.rank,
      popularity: data.popularity,
      members: data.members,
      favorites: data.favorites,
      season: data.season,
      year: data.season_year,
      genres: data.genres.map((g: { name: string }) => g.name),
      themes: data.themes.map((t: { name: string }) => t.name),
      demographics: data.demographics.map((d: { name: string }) => d.name),
      openingCount: data.theme.openings.length,
      endingCount: data.theme.endings.length,
      mainCharacters: charactersData.data.filter(
        (c: { role: string }) => c.role === 'Main'
      ).length,
      supportingCharacters: charactersData.data.filter(
        (c: { role: string }) => c.role === 'Supporting'
      ).length,
    };

    props.setAnimeData((animeData) => ({
      ...animeData,
      [malId]: updatedEntry,
    }));

    const validationStatus = validateAnime(
      updatedEntry,
      props.config,
      getChallenge(challengeId),
      CHALLENGE_LIST[challengeId].validators ?? []
    );
    props.setChallengeData((challengeData) => ({
      ...challengeData,
      [challengeId]: {
        ...challengeData[challengeId],
        validationStatus,
      },
    }));
  };

  return (
    <div className="main-content">
      <Typography variant="h4" color="common.white">
        {props.currentMinigame}
      </Typography>
      <Typography variant="h6" color="common.white">
        Required Challenges: {MINIGAME_DATA[props.currentMinigame].required}
      </Typography>
      {getCurrentMinigame().map(([challengeId, c]) => (
        <Box
          key={c.description}
          sx={{
            border: '1px solid #ddd',
            padding: '16px',
            marginBottom: '16px',
            borderRadius: '8px',
            backgroundColor: '#333',
          }}
        >
          <Typography
            variant="h6"
            color="common.white"
            dangerouslySetInnerHTML={{ __html: c.description }}
          />

          {c.addlInfo.map((info, index) => (
            <Typography
              key={index}
              sx={{ marginLeft: '16px', color: '#DDD' }}
              dangerouslySetInnerHTML={{ __html: info }}
            />
          ))}

          <Typography
            variant="h6"
            color="common.white"
            sx={{ marginTop: '16px' }}
          >
            {getAnime(challengeId)?.title}
          </Typography>

          <Grid container spacing={2} sx={{ marginTop: '16px' }}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography>MAL Id</Typography>
              <TextField
                hiddenLabel
                fullWidth
                variant="outlined"
                size="small"
                sx={{ backgroundColor: '#FFF' }}
                value={getChallenge(challengeId).malId}
                onChange={(e) =>
                  handleChange(challengeId, 'malId', e.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography>Start Date</Typography>
              <TextField
                hiddenLabel
                type="date"
                fullWidth
                variant="outlined"
                size="small"
                sx={{ backgroundColor: '#FFF' }}
                value={getChallenge(challengeId).startDate}
                onChange={(e) =>
                  handleChange(challengeId, 'startDate', e.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography>End Date</Typography>
              <TextField
                hiddenLabel
                type="date"
                fullWidth
                variant="outlined"
                size="small"
                sx={{ backgroundColor: '#FFF' }}
                value={getChallenge(challengeId).endDate}
                onChange={(e) =>
                  handleChange(challengeId, 'endDate', e.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12 }}>
              <Typography>Extra Info</Typography>
              <TextField
                hiddenLabel
                fullWidth
                variant="outlined"
                size="small"
                sx={{ backgroundColor: '#FFF' }}
                value={getChallenge(challengeId).extraInfo}
                onChange={(e) =>
                  handleChange(challengeId, 'extraInfo', e.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 11, sm: 11 }}>
              <HtmlTooltip
                title={
                  <Fragment>
                    {getChallenge(challengeId).validationStatus.success.map(
                      (s) => (
                        <Typography display="block">✓ {s}</Typography>
                      )
                    )}
                    {getChallenge(challengeId).validationStatus.error.map(
                      (e) => (
                        <Typography display="block">✗ {e}</Typography>
                      )
                    )}
                  </Fragment>
                }
                placement="top"
                arrow
              >
                <Button
                  variant="contained"
                  color={
                    getAnime(challengeId)
                      ? getChallenge(challengeId).validationStatus.valid
                        ? 'success'
                        : 'error'
                      : 'warning'
                  }
                  fullWidth
                  disableTouchRipple
                  onClick={() =>
                    loadAnime(getChallenge(challengeId).malId, challengeId)
                  }
                >
                  <Typography>
                    Status:{' '}
                    {getAnime(challengeId)
                      ? getChallenge(challengeId).validationStatus.valid
                        ? 'Valid'
                        : 'Invalid'
                      : 'Click To Load Anime'}
                  </Typography>
                </Button>
              </HtmlTooltip>
            </Grid>
            <Grid size={{ xs: 1, sm: 1 }}>
              <Button
                variant="contained"
                color="primary"
                disabled={!getAnime(challengeId)}
                fullWidth
                onClick={() =>
                  setOpenModals((o) => ({ ...o, [challengeId]: true }))
                }
              >
                <Settings />
              </Button>
              <EditAnimeModal
                open={openModals[challengeId]}
                onClose={() =>
                  setOpenModals((o) => ({ ...o, [challengeId]: false }))
                }
                onSave={(animeDetails) =>
                  modalOnSave(challengeId, animeDetails)
                }
                animeData={props.animeData}
                malId={getChallenge(challengeId).malId}
              />
            </Grid>
          </Grid>
        </Box>
      ))}
    </div>
  );
};

export default Minigame;
