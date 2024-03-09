import { createSlice } from '@reduxjs/toolkit';

import {
  fetchOtherWords,
  fetchOwnWords,
  createWord,
  addWord,
  editWord,
  deleteWord,
  getCategories,
  getStatistics,
  getTasks,
  postAnswers,
} from './wordsOperations';

const wordsInitialState = {
  otherWords: [],
  ownWords: [],
  categories: [],
  statistics: null,
  tasks: [],
  answers: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const wordsSlice = createSlice({
  name: 'words',
  initialState: wordsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchOwnWords.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(fetchOwnWords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownWords = action.payload;
      })
      .addCase(fetchOwnWords.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchOtherWords.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(fetchOtherWords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.otherWords = action.payload;
      })
      .addCase(fetchOtherWords.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(createWord.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(createWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownWords.push(action.payload);
      })
      .addCase(createWord.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addWord.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(addWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownWords.push(action.payload);
      })
      .addCase(addWord.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(editWord.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(editWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.ownWords.findIndex(
          word => word.id === action.payload.id
        );
        state.ownWords.splice(index, 1, action.payload.data);
      })
      .addCase(editWord.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteWord.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(deleteWord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.ownWords.findIndex(
          word => word.id === action.payload.id
        );
        state.ownWords.splice(index, 1);
      })
      .addCase(deleteWord.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(getCategories.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(getStatistics.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.statistics = action.payload;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(getTasks.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(postAnswers.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(postAnswers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.answers = action.payload;
      })
      .addCase(postAnswers.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
