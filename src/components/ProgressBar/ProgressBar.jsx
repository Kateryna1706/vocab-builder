import { ProgressWrapper } from './ProgressBar.styled';

import { useAdaptive } from 'hooks/useAdaptive';
import { useLocation } from 'react-router-dom';

import { CircularProgress } from '@mui/joy';

const ProgressBar = ({
  progress = 0,
  sizeMobile,
  sizeFromTablet,
  trackColor,
  progressColor,
  training,
}) => {
  const { isTablet, isDesktop } = useAdaptive();
  const { pathname } = useLocation();

  return (
    <ProgressWrapper $training={training}>
      {(isTablet || isDesktop) && pathname !== '/training' && (
        <span className="progressColumn">{progress}</span>
      )}
      <CircularProgress
        determinate
        variant="solid"
        value={progress}
        sx={{
          '--CircularProgress-size': `${
            isTablet || isDesktop ? sizeFromTablet : sizeMobile
          }`,
          '--CircularProgress-trackThickness': '5px',
          '--CircularProgress-trackColor': trackColor,
          '--CircularProgress-progressColor': progressColor,
        }}
      >
        {pathname === '/training' && (
          <span className="progress">{progress}</span>
        )}
      </CircularProgress>
    </ProgressWrapper>
  );
};

export default ProgressBar;
