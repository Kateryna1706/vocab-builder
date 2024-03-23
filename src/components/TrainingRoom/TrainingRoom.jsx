import WellDoneModal from 'components/WellDoneModal/WellDoneModal';
import {
  Button,
  ButtonNext,
  ButtonWrapper,
  TextIcon,
  Wrapper,
  WrapperEnglishWord,
  WrapperTextAndIcon,
  WrapperTraining,
  WrapperTranslation,
} from './TrainingRoom.styled';

import { selectTasks } from 'redux/words/wordsSelectors';
import { postAnswers } from 'redux/words/wordsOperations';

import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';

import { ReactComponent as Ukrainian } from '../Icons/ukraine.svg';
import { ReactComponent as English } from '../Icons/united-kingdom.svg';
import { ReactComponent as Switch } from '../Icons/switch-horizontal.svg';

const TrainingRoom = ({ answers, setAnswers }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector(selectTasks);

  const [translation, setTranslation] = useState('Введіть переклад');
  const [currentTasks, setCurrentTasks] = useState(() =>
    tasks.filter(task => task.task === 'ua')
  );
  const [indexTask, setIndexTask] = useState(0);
  const [task, setTask] = useState('ua');
  const [visibleButtonNext, setVisibleButtonNext] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [mistakes, setMistakes] = useState([]);
  const taskId = useMemo(
    () => (currentTasks.length === 0 ? '' : currentTasks[indexTask]?._id),

    [currentTasks, indexTask]
  );

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('hidden');
  };

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
    navigate('/dictionary');
  };

  const handleChangeInput = event => {
    const { value } = event.currentTarget;
    setTranslation(value);
  };

  const handleClickNext = en => {
    const answer = {
      _id: taskId,
      en: task === 'en' ? translation : currentTasks[indexTask]?.en,
      ua: task === 'ua' ? translation : currentTasks[indexTask]?.ua,
      task,
    };

    if (currentTasks.length - indexTask === 1 && task !== 'en') {
      setCurrentTasks(() => tasks.filter(task => task.task === 'en'));
      setTask('en');
      setIndexTask(0);
      setTranslation('');
    }

    if (currentTasks.length - indexTask > 1) {
      setIndexTask(prevState => prevState + 1);
      setTranslation('');
    }

    if (currentTasks.length - indexTask === 1 && task === 'en') {
      setVisibleButtonNext(false);
    }

    setAnswers(prevState => [...prevState, answer]);
  };

  const handleClickSave = () => {
    if (answers.length === 0) {
      Notify.failure(`You don't have the answers yet.`);
      return;
    }

    dispatch(postAnswers(answers))
      .then(data => {
        if (data.payload === 'Request failed with status code 400') {
          Notify.failure(`Bad request (invalid request body)`);
          navigate('/dictionary');
          return;
        }

        if (data.payload === 'Request failed with status code 404') {
          Notify.failure(`Service not found`);
          navigate('/dictionary');
          return;
        }
        const mistakesArray = data.payload
          .filter(answer => answer.isDone === false)
          .map(answer => answer.en)
          .filter((answer, index, array) => array.indexOf(answer) === index);

        const correctAnswersArray = data.payload
          .filter(answer => answer.isDone)
          .map(answer => answer.en)
          .filter((answer, index, array) => array.indexOf(answer) === index);

        setCorrectAnswers(correctAnswersArray);
        setMistakes(mistakesArray);

        openModal();
      })
      .catch(error => {
        Notify.failure(`${error}. Our current progress has not been saved.`);
        navigate('/dictionary');
      });
  };

  useEffect(() => {
    if (tasks.length === 0) return;

    if (currentTasks.length === 0) {
      setCurrentTasks(() => tasks.filter(task => task.task === 'en'));
      setTask('en');
    }
  }, [currentTasks.length, tasks]);

  return (
    <WrapperTraining>
      <Wrapper>
        <WrapperTranslation>
          <div className="position">
            <input
              value={translation}
              onChange={handleChangeInput}
              onFocus={() => setTranslation('')}
            />
            {visibleButtonNext && (
              <ButtonNext onClick={() => handleClickNext()}>
                <span>Next</span>
                <Switch />
              </ButtonNext>
            )}
          </div>
          {task !== 'ua' ? (
            <WrapperTextAndIcon>
              <English />
              <TextIcon>English</TextIcon>
            </WrapperTextAndIcon>
          ) : (
            <WrapperTextAndIcon>
              <Ukrainian />
              <TextIcon>Ukrainian</TextIcon>
            </WrapperTextAndIcon>
          )}
        </WrapperTranslation>
        <WrapperEnglishWord>
          <span className="word">
            {task === 'ua'
              ? currentTasks[indexTask]?.en
              : currentTasks[indexTask]?.ua}
          </span>
          {task === 'ua' ? (
            <WrapperTextAndIcon>
              <English />
              <TextIcon>English</TextIcon>
            </WrapperTextAndIcon>
          ) : (
            <WrapperTextAndIcon>
              <Ukrainian />
              <TextIcon>Ukrainian</TextIcon>
            </WrapperTextAndIcon>
          )}
        </WrapperEnglishWord>
      </Wrapper>

      <ButtonWrapper>
        <Button type="submit" onClick={handleClickSave} className="save">
          Save
        </Button>
        <Button
          type="button"
          onClick={() => {
            setTranslation('');
          }}
          className="cancel"
        >
          Cancel
        </Button>
      </ButtonWrapper>
      {isModalOpen && (
        <WellDoneModal
          closeModal={closeModal}
          correctAnswers={correctAnswers}
          mistakes={mistakes}
        />
      )}
    </WrapperTraining>
  );
};

export default TrainingRoom;
