import Dashboard from 'components/Dashboard/Dashboard';
import WordsPagination from 'components/WordsPagination/WordsPagination';
import WordsTable from 'components/WordsTable/WordsTable';

const DictionaryPage = () => {
  return (
    <main>
      <Dashboard></Dashboard>
      <WordsTable></WordsTable>
      <WordsPagination></WordsPagination>
    </main>
  );
};

export default DictionaryPage;
