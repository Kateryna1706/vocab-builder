import { useDispatch, useSelector } from 'react-redux';
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
import { changeFilter } from 'redux/words/filterSlice';
import { ReactComponent as Search } from '../Icons/search.svg';
import { ReactComponent as Vector } from '../Icons/vector.svg';
import { useEffect, useState } from 'react';
import { selectCategories } from 'redux/words/wordsSelectors';
import { fetchOwnWords } from 'redux/words/wordsOperations';

export const Filter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [category, setCategory] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isVerb, setIsVerb] = useState(false);
  const [debouncedKeywords, setDebouncedKeywords] = useState('');
  const [isIrregular, setIsIrregular] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 7;

  const handleWordFilterChange = event => {
    const { value } = event.currentTarget;
    setKeywords(value.trim());
  };

  const handleCategoryFilterChange = event => {
    const { value } = event.currentTarget;
    setCategory(value);
  };

  const handleClickSearch = () => {
    dispatch(changeFilter({ keywords }));
    dispatch(
      fetchOwnWords({
        keywords: debouncedKeywords,
        category,
        isIrregular,
        page,
        limit,
      })
    );
  };

  const handleClickDropDown = () => {
    setVisibleDropdown(prevState => !prevState);
  };

  const handleClickFilterCategory = event => {
    const value = event.currentTarget.innerHTML;
    setCategory(value);
    setIsVerb(value === 'verb');
    dispatch(changeFilter({ category: value }));
    setVisibleDropdown(prevState => !prevState);
  };

  const changeCheckbox = event => {
    const { value } = event.currentTarget;
    setIsIrregular(value === 'irregular');
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('timeout');
      setDebouncedKeywords(keywords);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [keywords]);

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
