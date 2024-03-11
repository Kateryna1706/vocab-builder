import ProgressBar from 'components/ProgressBar/ProgressBar';
import TrainingRoom from 'components/TrainingRoom/TrainingRoom';
import { Container, MainBlock } from './TrainingPage.styled';
import { useEffect } from 'react';
import { getTasks } from 'redux/words/wordsOperations';
import { useDispatch } from 'react-redux';

const TrainingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  
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
