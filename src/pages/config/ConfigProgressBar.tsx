import './ConfigProgressBar.css';

type ConfigProgressBarProps = {
  progress: number;
};

const ConfigProgressBar = ({ progress }: ConfigProgressBarProps) => {
  const levels = [
    { value: 25, label: 'Level 1', color: '#9ED450' },
    { value: 45, label: 'Level 2', color: '#FFB400' },
    { value: 60, label: 'Level 3', color: '#D44343' },
    { value: 75, label: 'Level 4', color: '#4BB1DF' },
    { value: 100, label: 'Level 5', color: '#9068D4' },
  ];

  return (
    <div className="config-progress-bar-container">
      <div className="config-progress-bar-background">
        {levels.map((level, index) => {
          const previousValue = index === 0 ? 0 : levels[index - 1].value;
          let width = 0;
          if (progress >= level.value) {
            width = level.value - previousValue;
          } else if (progress > previousValue) {
            width = progress - previousValue;
          } else {
            width = 0;
          }

          return (
            <div
              key={level.value}
              className="config-progress-bar-section"
              style={{
                left: `${previousValue}%`,
                width: `${width}%`,
                backgroundColor: level.color,
              }}
            />
          );
        })}
      </div>

      <div className="config-progress-labels">
        {levels.map((level) => (
          <div
            key={level.value}
            className={`config-level-label ${progress >= level.value ? 'active' : ''}`}
            style={{
              left: `calc(${level.value}% - 30px)`,
              color: level.color,
            }}
          >
            <span>{level.label}</span>
            <span>{level.value} Tickets</span>
          </div>
        ))}
      </div>

      <div className="config-progress-lines">
        {levels.map((level) => (
          <div
            key={level.value}
            className="config-progress-line"
            style={{ left: `${level.value}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ConfigProgressBar;
