import { Typography } from '@mui/material';
import './StatsProgressBar.css';

type ProgressBarProps = {
  ptw: number;
  watching: number;
  complete: number;
  required: number;
};

const StatsProgressBar = ({
  ptw,
  watching,
  complete,
  required,
}: ProgressBarProps) => {
  return (
    <div className="stats-progress-bar-container">
      <div className="stats-progress-bar-background">
        <div
          key="ptw"
          className="stats-progress-bar-section"
          style={{
            width: `${(100 * ptw) / required}%`,
            backgroundColor: '#747474',
          }}
        />
        <div
          key="watching"
          className="stats-progress-bar-section"
          style={{
            left: `${(100 * ptw) / required}%`,
            width: `${(100 * watching) / required}%`,
            backgroundColor: '#338543',
          }}
        />
        <div
          key="complete"
          className="stats-progress-bar-section"
          style={{
            left: `${(100 * (ptw + watching)) / required}%`,
            width: `${(100 * complete) / required}%`,
            backgroundColor: '#2d4276',
          }}
        />
        <div
          key="blank"
          className="stats-progress-bar-section"
          style={{
            left: `${(100 * (ptw + watching + complete)) / required}%`,
            width: `${(100 * (required - ptw - watching - complete)) / required}%`,
            backgroundColor: 'lightgray',
          }}
        />
      </div>

      <div className="stats-progress-labels">
        <Typography variant="body1" color="#747474">
          ●
        </Typography>
        <Typography variant="body1" sx={{ paddingLeft: '2px' }}>
          Plan To Watch {ptw}
        </Typography>
        <Typography
          variant="body1"
          color="#338543"
          sx={{ paddingLeft: '10px' }}
        >
          ●
        </Typography>
        <Typography variant="body1" sx={{ paddingLeft: '2px' }}>
          Watching {watching}
        </Typography>
        <Typography
          variant="body1"
          color="#2d4276"
          sx={{ paddingLeft: '10px' }}
        >
          ●
        </Typography>
        <Typography variant="body1" sx={{ paddingLeft: '2px' }}>
          Complete {complete}
        </Typography>
      </div>
    </div>
  );
};

export default StatsProgressBar;
