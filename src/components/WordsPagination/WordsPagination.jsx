import { Pagination } from '@mui/material';
import { Wrapper } from './WordsPagination.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/words/filterSlice';
import { useAdaptive } from 'hooks/useAdaptive';
import { selectFilter } from 'redux/words/wordsSelectors';

const WordsPagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const { isMobile } = useAdaptive();
  const { page } = useSelector(selectFilter);

  return (
    <Wrapper>
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        defaultPage={1}
        boundaryCount={isMobile ? 0 : 1}
        siblingCount={0}
        showFirstButton
        showLastButton
        onChange={(event, page) => {
          dispatch(changeFilter(page));
        }}
        page={page}
        sx={{
          color: '#121417',
          '.MuiButtonBase-root.MuiPaginationItem-root.Mui-selected': {
            border: 'none',
            color: '#fff',
            backgroundColor: '#85AA9F',
          },
        }}
      ></Pagination>
    </Wrapper>
  );
};

export default WordsPagination;
