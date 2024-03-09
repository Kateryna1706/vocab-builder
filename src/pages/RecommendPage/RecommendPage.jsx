import Dashboard from 'components/Dashboard/Dashboard';
import WordsPagination from 'components/WordsPagination/WordsPagination';
import WordsTable from 'components/WordsTable/WordsTable';
import { Container, MainBlock } from './RecommendPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectOtherUsersWords } from 'redux/words/wordsSelectors';
import { useEffect } from 'react';
import {
  getCategories,
  getStatistics,
  getTasks,
} from 'redux/words/wordsOperations';

const RecommendPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectOtherUsersWords);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getStatistics());
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <MainBlock>
      <Container>
        <Dashboard></Dashboard>
        <WordsTable data={data}></WordsTable>
        <WordsPagination></WordsPagination>
      </Container>
    </MainBlock>
  );
};

export default RecommendPage;
