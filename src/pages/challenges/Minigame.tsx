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
import { loadAnime } from '../../utils';

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
  const [openModals, setOpenModals] = useState<{
    [challengeId: string]: boolean;
  }>({});

  if (!props.currentMinigame) {
    return (
      <div className="main-content">
        <h1>Choose a Mini-Game</h1>
      </div>
    );
  }

  const handleChange = (challengeId: string, key: string, value: string) => {
    props.setChallengeData((challengeData) => ({
      ...challengeData,
      [challengeId]: {
        ...challengeData[challengeId],
        [key]: value,
        animeData:
          key === 'malId' ? undefined : challengeData[challengeId].animeData,
      },
    }));
  };

  const modalOnSave = (challengeId: string, animeDetails: AnimeDetails) => {
    props.setChallengeData((challengeData) => ({
      ...challengeData,
      [challengeId]: {
        ...challengeData[challengeId],
        animeData: animeDetails,
      },
    }));
  };

  const getChallenge = (challengeId: string) =>
    props.challengeData[challengeId];
  const getAnime = (challengeId: string) => getChallenge(challengeId).animeData;

  const getCurrentMinigame = () => {
    return Object.entries(CHALLENGE_LIST).filter(([_id, c]) =>
      c.minigames.includes(props.currentMinigame)
    );
  };

  const onLoad = async (malId: string, challengeId: string) => {
    const updatedEntry = await loadAnime(malId);

    props.setChallengeData((challengeData) => ({
      ...challengeData,
      [challengeId]: {
        ...challengeData[challengeId],
        animeData: updatedEntry,
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
          key={challengeId}
          sx={{
            border: '1px solid #ddd',
            padding: '16px',
            marginBottom: '16px',
            borderRadius: '8px',
            backgroundColor: '#333',
          }}
        >
          <Typography
            key={`${challengeId}-description`}
            variant="h6"
            color="common.white"
            dangerouslySetInnerHTML={{ __html: c.description }}
          />

          {c.addlInfo.map((info, index) => (
            <Typography
              key={`${challengeId}-addlInfo-${index}`}
              sx={{ marginLeft: '16px', color: '#DDD' }}
              dangerouslySetInnerHTML={{ __html: info }}
            />
          ))}

          <Typography
            key={`${challengeId}-anime-title`}
            variant="h6"
            color="common.white"
            sx={{ marginTop: '16px' }}
          >
            <a
              href={`https://myanimelist.net/anime/${getAnime(challengeId)?.malId}`}
            >
              {getAnime(challengeId)?.title}
            </a>
          </Typography>

          <Grid
            container
            key={`${challengeId}-grid`}
            spacing={2}
            sx={{ marginTop: '16px' }}
          >
            <Grid key={`${challengeId}-malId`} size={{ xs: 12, sm: 4 }}>
              <Typography key={`${challengeId}-malId-label`}>MAL Id</Typography>
              <TextField
                key={`${challengeId}-malId-input`}
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
            <Grid key={`${challengeId}-startDate`} size={{ xs: 12, sm: 4 }}>
              <Typography key={`${challengeId}-startDate-label`}>
                Start Date
              </Typography>
              <TextField
                key={`${challengeId}-startDate-input`}
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
            <Grid key={`${challengeId}-endDate`} size={{ xs: 12, sm: 4 }}>
              <Typography key={`${challengeId}-endDate-label`}>
                End Date
              </Typography>
              <TextField
                key={`${challengeId}-endDate-input`}
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
            <Grid key={`${challengeId}-extraInfo`} size={{ xs: 12, sm: 12 }}>
              <Typography key={`${challengeId}-extraInfo-label`}>
                Extra Info
              </Typography>
              <TextField
                key={`${challengeId}-extraInfo-input`}
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
            <Grid key={`${challengeId}-status`} size={{ xs: 11, sm: 11 }}>
              <HtmlTooltip
                key={`${challengeId}-status-tooltip`}
                title={
                  <Fragment key={`${challengeId}-status-tooltip-fragment`}>
                    {validateAnime(
                      props.config,
                      props.challengeData,
                      challengeId,
                      props.currentMinigame
                    ).success.map((s, idx) => (
                      <Typography
                        key={`${challengeId}-status-tooltip-fragment-success-${idx}`}
                        display="block"
                      >
                        ✓ {s}
                      </Typography>
                    ))}
                    {validateAnime(
                      props.config,
                      props.challengeData,
                      challengeId,
                      props.currentMinigame
                    ).error.map((e, idx) => (
                      <Typography
                        key={`${challengeId}-status-tooltip-fragment-error-${idx}`}
                        display="block"
                      >
                        ✗ {e}
                      </Typography>
                    ))}
                  </Fragment>
                }
                placement="top"
                arrow
              >
                <Button
                  key={`${challengeId}-status-button`}
                  variant="contained"
                  color={
                    getAnime(challengeId)
                      ? validateAnime(
                          props.config,
                          props.challengeData,
                          challengeId,
                          props.currentMinigame
                        ).valid
                        ? 'success'
                        : 'error'
                      : 'warning'
                  }
                  fullWidth
                  disableTouchRipple
                  onClick={() =>
                    onLoad(getChallenge(challengeId).malId, challengeId)
                  }
                >
                  <Typography key={`${challengeId}-status-button-text`}>
                    Status:{' '}
                    {getAnime(challengeId)
                      ? validateAnime(
                          props.config,
                          props.challengeData,
                          challengeId,
                          props.currentMinigame
                        ).valid
                        ? 'Valid'
                        : 'Invalid'
                      : 'Click To Load Anime'}
                  </Typography>
                </Button>
              </HtmlTooltip>
            </Grid>
            <Grid key={`${challengeId}-settings`} size={{ xs: 1, sm: 1 }}>
              <Button
                key={`${challengeId}-settings-button`}
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
                challengeData={getChallenge(challengeId)}
              />
            </Grid>
          </Grid>
        </Box>
      ))}
    </div>
  );
};

export default Minigame;
