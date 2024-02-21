import Dashboard from 'components/Dashboard/Dashboard';
import WordsPagination from 'components/WordsPagination/WordsPagination';
import WordsTable from 'components/WordsTable/WordsTable';
import { Container, MainBlock } from './DictionaryPage.styled';

const DictionaryPage = () => {
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
