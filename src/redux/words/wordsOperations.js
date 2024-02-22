import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';

export const fetchOtherWords = createAsyncThunk(
  'words/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/words/all');
      return response.data.results;
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
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createWord = createAsyncThunk(
  'words/createWord',
  async (word, thunkAPI) => {
    try {
      const response = await axios.post('/words/create', word);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWord = createAsyncThunk(
  'words/addWord',
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/words/add/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const aditWord = createAsyncThunk(
  'words/aditWord',
  async (word, thunkAPI) => {
    try {
      const response = await axios.patch(`/words/adit/${word.id}`, word.data);

      return { id: word.id, data: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWord = createAsyncThunk(
  'words/deleteWord',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/words/delete/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'words/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/words/categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getStatistics = createAsyncThunk(
  'words/getStatistics',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/words/statistics');
      return response.data.totalCount;
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
      return response.data.words;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postAnswers = createAsyncThunk(
  'words/postAnswers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`/words/answers`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
