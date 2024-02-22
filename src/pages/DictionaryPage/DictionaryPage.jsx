import Dashboard from 'components/Dashboard/Dashboard';
import WordsPagination from 'components/WordsPagination/WordsPagination';
import WordsTable from 'components/WordsTable/WordsTable';
import { Container, MainBlock } from './DictionaryPage.styled';
import { useEffect } from 'react';
import { getCategories } from 'redux/words/wordsOperations';
import { useDispatch } from 'react-redux';

const DictionaryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <MainBlock>
      <Container>
        <Dashboard></Dashboard>
        <WordsTable></WordsTable>
        <WordsPagination></WordsPagination>
      </Container>
    </MainBlock>
  );
};

export default DictionaryPage;
