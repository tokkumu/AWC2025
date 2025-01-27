import { Dispatch, SetStateAction } from 'react';
import { ConfigData } from './types';
import ConfigProgressBar from './ConfigProgressBar';
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import './Config.css';

const TAG_BASED_RESTRICTIONS = [
  'Warrior',
  'Adventurer',
  'Jester',
  'Thespian',
  'Minstrel',
  'Sorcerer',
  'Guardian',
  'Cleric',
];

const TYPE_BASED_RESTRICTIONS = ['Watcher', 'Seeker', 'Finder'];

const RATING_BASED_RESTRICTIONS = ['Neutral', 'Chaotic Evil'];

const QUEST_RESTRICTIONS = [
  ...TAG_BASED_RESTRICTIONS,
  ...TYPE_BASED_RESTRICTIONS,
  ...RATING_BASED_RESTRICTIONS,
];

const CHALLENGE_RESTRICTIONS = [
  'Exalted',
  'Indomitable',
  'Almighty',
  'Supreme',
];

const Config = ({
  configData,
  setConfigData,
}: {
  configData: ConfigData;
  setConfigData: Dispatch<SetStateAction<ConfigData>>;
}) => {
  const handleMinigameChange = (
    name: string,
    value: boolean | string[] | string
  ) => {
    if (name.indexOf('.') === -1) {
      setConfigData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      const [category, subcategory] = name.split('.');
      setConfigData((prev) => ({
        ...prev,
        [category]: {
          ...(prev[category as keyof ConfigData] as object),
          [subcategory]: value,
        },
      }));
    }
  };

  const calculateProgress = (configData: ConfigData) => {
    let totalTickets = 0;
    if (configData.minigames.darts) totalTickets += 10;
    if (configData.minigames.bingo) totalTickets += 30;
    if (configData.minigames.plinko) totalTickets += 15;
    if (configData.minigames.whackamole) totalTickets += 15;
    if (configData.minigames.tarot) totalTickets += 15;
    if (configData.minigames.duckpond) totalTickets += 15;
    return totalTickets;
  };

  return (
    <div className="config-container">
      <h1 className="config-header">Config</h1>
      <form className="config-field">
        <div className="input-group">
          <Typography>Username</Typography>
          <TextField
            hiddenLabel
            id="username"
            name="username"
            value={configData.username}
            onChange={(e) =>
              handleMinigameChange(e.target.name, e.target.value)
            }
            fullWidth
            variant="outlined"
            color={configData.username ? 'primary' : 'error'}
            sx={{ input: { backgroundColor: 'white' } }}
            required
          />
        </div>

        <div className="input-group">
          <Typography>Completed Anime</Typography>
          <TextField
            hiddenLabel
            id="completedAnime"
            name="completedAnime"
            value={configData.completedAnime}
            onChange={(e) =>
              handleMinigameChange(e.target.name, e.target.value)
            }
            fullWidth
            variant="outlined"
            color={configData.completedAnime ? 'primary' : 'error'}
            sx={{ input: { backgroundColor: 'white' } }}
            required
          />
        </div>

        <div className="input-group">
          <Typography>Time Zone</Typography>
          <TextField
            hiddenLabel
            id="timeZone"
            name="timeZone"
            value={configData.timeZone}
            onChange={(e) =>
              handleMinigameChange(e.target.name, e.target.value)
            }
            fullWidth
            variant="outlined"
            color={configData.timeZone ? 'primary' : 'error'}
            sx={{ input: { backgroundColor: 'white' } }}
            required
          />
        </div>

        <div className="input-group">
          <Typography>Anime In Forum Avatar/Signature</Typography>
          <TextField
            hiddenLabel
            id="animeInForum"
            name="animeInForum"
            value={configData.animeInForum}
            onChange={(e) =>
              handleMinigameChange(e.target.name, e.target.value)
            }
            fullWidth
            variant="outlined"
            color="primary"
            sx={{ input: { backgroundColor: 'white' } }}
          />
        </div>

        <div className="input-group">
          <Typography>Initial Post #</Typography>
          <TextField
            hiddenLabel
            id="initialPostNumber"
            name="initialPostNumber"
            value={configData.initialPostNumber}
            onChange={(e) =>
              handleMinigameChange(e.target.name, e.target.value)
            }
            fullWidth
            variant="outlined"
            color={configData.timeZone ? 'primary' : 'error'}
            sx={{ input: { backgroundColor: 'white' } }}
          />
        </div>

        <div className="input-group">
          <Typography>Plan To Watch Color</Typography>
          <TextField
            hiddenLabel
            id="legend.ptw"
            name="legend.ptw"
            value={configData.legend.ptw}
            onChange={(e) =>
              handleMinigameChange(e.target.name, e.target.value)
            }
            fullWidth
            variant="outlined"
            color={configData.timeZone ? 'primary' : 'error'}
            sx={{ input: { backgroundColor: 'white' } }}
          />
        </div>

        <div className="input-group">
          <Typography>Watching Color</Typography>
          <TextField
            hiddenLabel
            id="legend.watching"
            name="legend.watching"
            value={configData.legend.watching}
            onChange={(e) =>
              handleMinigameChange(e.target.name, e.target.value)
            }
            fullWidth
            variant="outlined"
            color={configData.timeZone ? 'primary' : 'error'}
            sx={{ input: { backgroundColor: 'white' } }}
          />
        </div>

        <div className="input-group">
          <Typography>Completed Color</Typography>
          <TextField
            hiddenLabel
            id="legend.completed"
            name="legend.completed"
            value={configData.legend.completed}
            onChange={(e) =>
              handleMinigameChange(e.target.name, e.target.value)
            }
            fullWidth
            variant="outlined"
            color={configData.timeZone ? 'primary' : 'error'}
            sx={{ input: { backgroundColor: 'white' } }}
          />
        </div>

        <div className="minigame-section">
          <h2>
            Mini-Games - {calculateProgress(configData)} Total Tickets Selected
          </h2>

          <ConfigProgressBar progress={calculateProgress(configData)} />

          <div className="minigame-box">
            <FormControlLabel
              control={
                <Checkbox
                  checked={configData.minigames.darts}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.checked)
                  }
                  name="minigames.darts"
                />
              }
              label="Darts (10 tickets)"
            />
          </div>

          <div className="minigame-box">
            <FormControlLabel
              control={
                <Checkbox
                  checked={configData.minigames.bingo}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.checked)
                  }
                  name="minigames.bingo"
                />
              }
              label="Bingo (30 tickets)"
            />
            {configData.minigames.bingo && (
              <div className="options-dropdown">
                <Typography>Select 17 Bingo Card</Typography>
                <TextField
                  hiddenLabel
                  select
                  name="minigames.bingo17"
                  value={configData.minigames.bingo17}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.value)
                  }
                  sx={{ width: '5%', backgroundColor: 'white' }}
                >
                  <MenuItem value="17A">17A</MenuItem>
                  <MenuItem value="17B">17B</MenuItem>
                </TextField>

                <Typography>Select 21 Bingo Card</Typography>
                <TextField
                  hiddenLabel
                  select
                  name="minigames.bingo21"
                  value={configData.minigames.bingo21}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.value)
                  }
                  sx={{ width: '5%', backgroundColor: 'white' }}
                >
                  <MenuItem value="21A">21A</MenuItem>
                  <MenuItem value="21B">21B</MenuItem>
                </TextField>
              </div>
            )}
          </div>

          <div className="minigame-box">
            <FormControlLabel
              control={
                <Checkbox
                  checked={configData.minigames.plinko}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.checked)
                  }
                  name="minigames.plinko"
                />
              }
              label="Plinko (15 tickets)"
            />
          </div>

          <div className="minigame-box">
            <FormControlLabel
              control={
                <Checkbox
                  checked={configData.minigames.whackamole}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.checked)
                  }
                  name="minigames.whackamole"
                />
              }
              label="Whack-A-Mole (15 tickets)"
            />
            {configData.minigames.whackamole && (
              <div className="options-dropdown">
                <Typography>Select Full Mini-Game Restrictions</Typography>
                <Select
                  name="minigames.whackamoleRestrictions"
                  multiple
                  value={configData.minigames.whackamoleRestrictions}
                  onChange={(e) =>
                    handleMinigameChange(
                      e.target.name,
                      typeof e.target.value === 'string'
                        ? e.target.value.split(',')
                        : e.target.value
                    )
                  }
                  fullWidth
                  sx={{ backgroundColor: 'white' }}
                >
                  {CHALLENGE_RESTRICTIONS.map((restriction) => (
                    <MenuItem key={restriction} value={restriction}>
                      {restriction}
                    </MenuItem>
                  ))}
                </Select>
                {configData.minigames.whackamoleRestrictions.includes(
                  'Exalted'
                ) ? (
                  <div>
                    <Typography>Exalted Tag-Based Restriction</Typography>
                    <TextField
                      hiddenLabel
                      select
                      name="minigames.exaltedRestriction"
                      value={configData.minigames.exaltedRestriction}
                      onChange={(e) =>
                        handleMinigameChange(e.target.name, e.target.value)
                      }
                      fullWidth
                      sx={{ backgroundColor: 'white' }}
                    >
                      {TAG_BASED_RESTRICTIONS.map((restriction) => (
                        <MenuItem key={restriction} value={restriction}>
                          {restriction}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                ) : null}
                {configData.minigames.whackamoleRestrictions.includes(
                  'Supreme'
                ) ? (
                  <div>
                    <Typography>Supreme Rating-Based Restriction</Typography>
                    <TextField
                      hiddenLabel
                      select
                      name="minigames.supremeRestriction"
                      value={configData.minigames.supremeRestriction}
                      onChange={(e) =>
                        handleMinigameChange(e.target.name, e.target.value)
                      }
                      fullWidth
                      sx={{ backgroundColor: 'white' }}
                    >
                      {RATING_BASED_RESTRICTIONS.map((restriction) => (
                        <MenuItem key={restriction} value={restriction}>
                          {restriction}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                ) : null}
                <Typography>
                  Select Whack-A-Mole Quest #1 And Restrictions
                </Typography>
                <TextField
                  hiddenLabel
                  select
                  name="minigames.whackamole1"
                  value={configData.minigames.whackamole1}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.value)
                  }
                  slotProps={{
                    htmlInput: { style: { backgroundColor: 'white' } },
                  }}
                  sx={{ width: '5%', backgroundColor: 'white' }}
                >
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value="D">D</MenuItem>
                  <MenuItem value="E">E</MenuItem>
                </TextField>

                <Select
                  name="minigames.whackamole1Restrictions"
                  multiple
                  value={configData.minigames.whackamole1Restrictions}
                  onChange={(e) =>
                    handleMinigameChange(
                      e.target.name,
                      typeof e.target.value === 'string'
                        ? e.target.value.split(',')
                        : e.target.value
                    )
                  }
                  sx={{
                    marginLeft: '1%',
                    width: '94%',
                    backgroundColor: 'white',
                  }}
                >
                  {QUEST_RESTRICTIONS.map((restriction) => (
                    <MenuItem key={restriction} value={restriction}>
                      {restriction}
                    </MenuItem>
                  ))}
                </Select>

                <Typography>
                  Select Whack-A-Mole Quest #2 And Restrictions
                </Typography>
                <TextField
                  hiddenLabel
                  select
                  name="minigames.whackamole2"
                  value={configData.minigames.whackamole2}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.value)
                  }
                  sx={{ width: '5%', backgroundColor: 'white' }}
                >
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value="D">D</MenuItem>
                  <MenuItem value="E">E</MenuItem>
                </TextField>

                <Select
                  name="minigames.whackamole2Restrictions"
                  multiple
                  value={configData.minigames.whackamole2Restrictions}
                  onChange={(e) =>
                    handleMinigameChange(
                      e.target.name,
                      typeof e.target.value === 'string'
                        ? e.target.value.split(',')
                        : e.target.value
                    )
                  }
                  sx={{
                    marginLeft: '1%',
                    width: '94%',
                    backgroundColor: 'white',
                  }}
                >
                  {QUEST_RESTRICTIONS.map((restriction) => (
                    <MenuItem key={restriction} value={restriction}>
                      {restriction}
                    </MenuItem>
                  ))}
                </Select>

                <Typography>
                  Select Whack-A-Mole Quest #3 And Restrictions
                </Typography>
                <TextField
                  hiddenLabel
                  select
                  name="minigames.whackamole3"
                  value={configData.minigames.whackamole3}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.value)
                  }
                  sx={{ width: '5%', backgroundColor: 'white' }}
                >
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value="D">D</MenuItem>
                  <MenuItem value="E">E</MenuItem>
                </TextField>

                <Select
                  name="minigames.whackamole3Restrictions"
                  multiple
                  value={configData.minigames.whackamole3Restrictions}
                  onChange={(e) =>
                    handleMinigameChange(
                      e.target.name,
                      typeof e.target.value === 'string'
                        ? e.target.value.split(',')
                        : e.target.value
                    )
                  }
                  sx={{
                    marginLeft: '1%',
                    width: '94%',
                    backgroundColor: 'white',
                  }}
                >
                  {QUEST_RESTRICTIONS.map((restriction) => (
                    <MenuItem key={restriction} value={restriction}>
                      {restriction}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            )}
          </div>

          <div className="minigame-box">
            <FormControlLabel
              control={
                <Checkbox
                  checked={configData.minigames.tarot}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.checked)
                  }
                  name="minigames.tarot"
                />
              }
              label="Tarot (15 tickets)"
            />
            {configData.minigames.tarot && (
              <div className="options-dropdown">
                <Typography>Select Tarot Ending</Typography>
                <TextField
                  hiddenLabel
                  select
                  name="minigames.tarotEnding"
                  value={configData.minigames.tarotEnding}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.value)
                  }
                  fullWidth
                  sx={{ backgroundColor: 'white' }}
                >
                  <MenuItem value="2.1">Ending #1 (2.1)</MenuItem>
                  <MenuItem value="2.2">Ending #2 (2.2)</MenuItem>
                  <MenuItem value="3.1">Ending #3 (3.1)</MenuItem>
                  <MenuItem value="3.2">Ending #4 (3.2)</MenuItem>
                </TextField>
              </div>
            )}
          </div>

          <div className="minigame-box">
            <FormControlLabel
              control={
                <Checkbox
                  checked={configData.minigames.duckpond}
                  onChange={(e) =>
                    handleMinigameChange(e.target.name, e.target.checked)
                  }
                  name="minigames.duckpond"
                />
              }
              label="Duck Pond (15 tickets)"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Config;
