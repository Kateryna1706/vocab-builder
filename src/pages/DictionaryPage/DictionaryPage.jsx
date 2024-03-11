import Dashboard from 'components/Dashboard/Dashboard';
import WordsPagination from 'components/WordsPagination/WordsPagination';
import WordsTable from 'components/WordsTable/WordsTable';
import { Container, MainBlock } from './DictionaryPage.styled';

import { getCategories, getStatistics } from 'redux/words/wordsOperations';
import {
  selectOwnWords,
  selectTotalPagesOwn,
} from 'redux/words/wordsSelectors';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DictionaryPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectOwnWords);
  const totalPages = useSelector(selectTotalPagesOwn);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <MainBlock>
      <Container>
        <Dashboard></Dashboard>
        <WordsTable data={data}></WordsTable>
        <WordsPagination totalPages={totalPages} data={data}></WordsPagination>
      </Container>
    </MainBlock>
  );
};

export default DictionaryPage;
