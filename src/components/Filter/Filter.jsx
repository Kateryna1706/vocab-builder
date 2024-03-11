import {
  Circle,
  CustomRadioButton,
  Dropdown,
  DropdownItem,
  Label,
  RadioLabel,
  RadioText,
  RadioWrapper,
  Wrapper,
} from './Filter.styled';

import { selectCategories, selectFilter } from 'redux/words/wordsSelectors';
import { fetchOtherWords, fetchOwnWords } from 'redux/words/wordsOperations';
import { changeFilter } from 'redux/words/filterSlice';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as Search } from '../Icons/search.svg';
import { ReactComponent as Vector } from '../Icons/vector.svg';

export const Filter = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [category, setCategory] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isVerb, setIsVerb] = useState(false);
  const [debouncedKeywords, setDebouncedKeywords] = useState('');
  const [isIrregular, setIsIrregular] = useState('');
  const limit = 7;

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const categories = useSelector(selectCategories);
  const { page } = useSelector(selectFilter);
  const parameters = useMemo(() => {
    return {
      keywords: debouncedKeywords,
      category,
      isIrregular,
      page,
      limit,
    };
  }, [category, debouncedKeywords, isIrregular, page]);

  const handleWordFilterChange = event => {
    dispatch(changeFilter(1));
    const { value } = event.currentTarget;
    setKeywords(value.trim());
  };

  const handleCategoryFilterChange = event => {
    dispatch(changeFilter(1));

    const { value } = event.currentTarget;

    if (value !== 'verb') {
      setIsIrregular('');
    }
    setCategory(value);
  };

  const handleClickSearch = () => {
    if (pathname === '/recommend') {
      dispatch(fetchOtherWords(parameters));
    } else {
      dispatch(fetchOwnWords(parameters));
    }
  };

  const handleClickDropDown = () => {
    setVisibleDropdown(prevState => !prevState);
  };

  const handleClickFilterCategory = event => {
    dispatch(changeFilter(1));
    const value = event.currentTarget.innerHTML;

    if (value !== 'verb') {
      setIsIrregular('');
    }
    setCategory(value);
    setIsVerb(value === 'verb');
    setVisibleDropdown(prevState => !prevState);
  };

  const changeCheckbox = event => {
    dispatch(changeFilter(1));
    const { value } = event.currentTarget;
    setIsIrregular(value === 'irregular');
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedKeywords(keywords);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [keywords]);

  useEffect(() => {
    if (pathname === '/recommend') {
      dispatch(fetchOtherWords(parameters));
    } else {
      dispatch(fetchOwnWords(parameters));
    }
  }, [dispatch, parameters, pathname]);

  return (
    <Wrapper $isVerb={!isVerb}>
      <Label>
        <Search className="word" onClick={handleClickSearch} />
        <input
          type="text"
          name="word"
          value={keywords}
          className="wordInput"
          onChange={handleWordFilterChange}
        />
      </Label>
      <Label>
        <Vector className="category" onClick={handleClickDropDown} />
        <input
          type="text"
          name="category"
          value={category}
          disabled
          className="categoryInput"
          onChange={handleCategoryFilterChange}
        />
        {visibleDropdown && (
          <Dropdown>
            {categories.map((item, index) => (
              <DropdownItem key={index} onClick={handleClickFilterCategory}>
                {item}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </Label>
      {isVerb && (
        <RadioWrapper>
          <RadioLabel>
            <input
              type="radio"
              name="verb"
              value="regular"
              onChange={changeCheckbox}
            />
            <CustomRadioButton>
              <Circle className="selected"></Circle>
            </CustomRadioButton>
            <RadioText>Regular</RadioText>
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="verb"
              value="irregular"
              onChange={changeCheckbox}
            />
            <CustomRadioButton>
              <Circle className="selected"></Circle>
            </CustomRadioButton>
            <RadioText>Irregular</RadioText>
          </RadioLabel>
        </RadioWrapper>
      )}
    </Wrapper>
  );
};
