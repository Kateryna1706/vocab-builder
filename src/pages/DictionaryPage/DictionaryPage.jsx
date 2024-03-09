import Dashboard from 'components/Dashboard/Dashboard';
import WordsPagination from 'components/WordsPagination/WordsPagination';
import WordsTable from 'components/WordsTable/WordsTable';
import { Container, MainBlock } from './DictionaryPage.styled';
import { useEffect } from 'react';
import {
  getCategories,
  getStatistics,
  getTasks,
} from 'redux/words/wordsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectOwnWords } from 'redux/words/wordsSelectors';

const DictionaryPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectOwnWords);

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

export default DictionaryPage;
