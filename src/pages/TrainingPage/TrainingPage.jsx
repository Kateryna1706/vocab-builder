import ProgressBar from 'components/ProgressBar/ProgressBar';
import TrainingRoom from 'components/TrainingRoom/TrainingRoom';
import {
  ButtonWrapper,
  Container,
  MainBlock,
  WrapperMessage,
} from './TrainingPage.styled';

import { getTasks } from 'redux/words/wordsOperations';
import { selectAnswers } from 'redux/words/wordsSelectors';

import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import bloodReport from '../../image/blood-report.webp';
import bloodReport2 from '../../image/blood-report@2x.webp';

const TrainingPage = () => {
  const [tasksTotal, setTasksTotal] = useState(0);

  const dispatch = useDispatch();
  const answers = useSelector(selectAnswers);
  const progress = useMemo(() => {
    return tasksTotal === 0 || answers.length === 0
      ? 0
      : (answers.length / tasksTotal) * 100;
  }, [answers.length, tasksTotal]);

  useEffect(() => {
    dispatch(getTasks())
      .then(data => {
        setTasksTotal(data.payload.length);
      })
      .catch(error => console.log(error));
  }, [dispatch, tasksTotal]);

  return (
    <MainBlock>
      <Container>
        {tasksTotal === 0 ? (
          <WrapperMessage>
            <img
              className="bloodReport"
              srcSet={`${bloodReport} 1x, ${bloodReport2} 2x`}
              src={bloodReport}
              alt="list sheet"
              loading="lazy"
            />
            <div className="wrapperText">
              <p>You don't have a single word to learn right now. </p>
              <p>
                Please create or add a word to start the workout. We want to
                improve your vocabulary and develop your knowledge, so please
                share the words you are interested in adding to your study.
              </p>
              <ButtonWrapper>
                <Link
                  to="/dictionary"
                  state={{ from: '/training' }}
                  className="add button"
                >
                  Add word
                </Link>
                <button
                  type="button"
                  onClick={() => {}}
                  className="cancel button"
                >
                  Cancel
                </button>
              </ButtonWrapper>
            </div>
          </WrapperMessage>
        ) : (
          <>
            <ProgressBar
              progress={progress}
              sizeMobile="50px"
              sizeFromTablet="64px"
              trackColor="#85AA9F"
              progressColor="#FFFFFF"
            />
            <TrainingRoom />
          </>
        )}
        {/* <ButtonWrapper>
          <Button type="submit" onClick={handleClickAdd} className="add">
            Add word
          </Button>
          <Button type="button" onClick={() => {}} className="cancel">
            Cancel
          </Button>
        </ButtonWrapper> */}
      </Container>
    </MainBlock>
  );
};

export default TrainingPage;
