import { ProgressWrapper } from './ProgressBar.styled';
import { useAdaptive } from 'hooks/useAdaptive';
import { CircularProgress } from '@mui/joy';

const ProgressBar = ({ progress }) => {
  const { isTablet, isDesktop } = useAdaptive();

  return (
    <ProgressWrapper>
      {(isTablet || isDesktop) && <span className="progress">{progress}</span>}
      <CircularProgress
        determinate
        variant="solid"
        value={progress}
        sx={{
          '--CircularProgress-size': `${
            isTablet || isDesktop ? '32px' : '30px'
          }`,
          '--CircularProgress-trackThickness': '6px',
          '--CircularProgress-trackColor': '#D4F8D3',
          '--CircularProgress-progressColor': '#2BD627',
        }}
      />
    </ProgressWrapper>
  );
};

export default ProgressBar;
