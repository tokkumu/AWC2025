import { Typography } from '@mui/material';
import './Sidebar.css';
import { SidebarProps } from './types';

const Sidebar = (props: SidebarProps) => {
  const { minigames, setCurrentMinigame } = props;
  if (!Object.values(minigames).some((m) => m)) {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <Typography>
              No Mini-Games Enabled. Enable Some in Config.
            </Typography>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <ul>
        {Object.keys(minigames).map((page) => (
          <li
            key={page}
            className="page"
            hidden={!minigames[page]}
            onClick={() => setCurrentMinigame(page)}
          >
            <Typography>{page}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
