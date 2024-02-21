import Dashboard from 'components/Dashboard/Dashboard';
import WordsPagination from 'components/WordsPagination/WordsPagination';
import WordsTable from 'components/WordsTable/WordsTable';
import { Container, MainBlock } from './RecommendPage.styled';

const RecommendPage = () => {
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

export default RecommendPage;
