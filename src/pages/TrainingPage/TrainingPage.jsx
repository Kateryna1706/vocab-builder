import ProgressBar from 'components/ProgressBar/ProgressBar';
import TrainingRoom from 'components/TrainingRoom/TrainingRoom';
import { Container, MainBlock } from './TrainingPage.styled';

const TrainingPage = () => {
  return (
    <MainBlock>
      <Container>
        <ProgressBar></ProgressBar>
        <TrainingRoom></TrainingRoom>
      </Container>
    </MainBlock>
  );
};

export default TrainingPage;
