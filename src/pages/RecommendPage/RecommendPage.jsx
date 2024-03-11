import Dashboard from 'components/Dashboard/Dashboard';
import WordsPagination from 'components/WordsPagination/WordsPagination';
import WordsTable from 'components/WordsTable/WordsTable';
import { Container, MainBlock } from './RecommendPage.styled';

import {
  selectOtherUsersWords,
  selectTotalPagesOther,
} from 'redux/words/wordsSelectors';
import { getCategories, getStatistics } from 'redux/words/wordsOperations';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RecommendPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectOtherUsersWords);
  const totalPages = useSelector(selectTotalPagesOther);

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

export default RecommendPage;
