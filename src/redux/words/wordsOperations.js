import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api.com';

export const fetchOtherWords = createAsyncThunk(
  'words/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/words/all');
      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOwnWords = createAsyncThunk(
  'words/fetchOwnWords',
  async (parameters, thunkAPI) => {
    const { keywords, category, isIrregular, page, limit } = parameters;
    try {
      const response = await axios.get(
        `/words/own?keywords=${keywords}&category=${category}&isIrregular=${isIrregular}&page=${page}&limit=${limit}`
      );
      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createWord = createAsyncThunk(
  'words/createWord',
  async (word, thunkAPI) => {
    try {
      const newWord = await axios.post('/words/create', word);

      return newWord;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWord = createAsyncThunk(
  'words/addWord',
  async (id, thunkAPI) => {
    try {
      const addedWord = await axios.post(`/words/add/${id}`);

      return addedWord;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const aditWord = createAsyncThunk(
  'words/aditWord',
  async (word, thunkAPI) => {
    try {
      const updatedWord = await axios.patch(
        `/words/adit/${word.id}`,
        word.data
      );

      return { id: word.id, data: updatedWord };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWord = createAsyncThunk(
  'words/deleteWord',
  async (id, thunkAPI) => {
    try {
      const deletedWord = await axios.delete(`/words/delete/${id}`);
      return deletedWord;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'words/getCategories',
  async (_, thunkAPI) => {
    try {
      const arrayCategories = await axios.get('/words/categories');
      return arrayCategories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getStatistics = createAsyncThunk(
  'words/getStatistics',
  async (_, thunkAPI) => {
    try {
      const statistics = await axios.get('/words/statistics');
      return statistics.totalCount;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTasks = createAsyncThunk(
  'words/getTasks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/words/tasks');
      return response.words;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postAnswers = createAsyncThunk(
  'words/postAnswers',
  async (_, thunkAPI) => {
    try {
      const answers = await axios.post(`/words/answers`);
      return answers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
