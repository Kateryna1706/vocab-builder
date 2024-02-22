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
import { useState } from 'react';
import { selectCategories } from 'redux/words/wordsSelectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [category, setCategory] = useState('');
  const [word, setWord] = useState('');
  const categories = useSelector(selectCategories);

  const handleWordFilterChange = event => {
    const { value } = event.currentTarget;
    setWord(value);
  };

  const handleCategoryFilterChange = event => {
    const { value } = event.currentTarget;
    setCategory(value);
  };

  const handleClickSearch = () => {
    dispatch(changeFilter({ word }));
  };

  const handleClickDropDown = () => {
    setVisibleDropdown(prevState => !prevState);
  };

  const handleClickFilterCategory = event => {
    const value = event.currentTarget.innerHTML;
    setCategory(value);
    dispatch(changeFilter({ category: value }));
    setVisibleDropdown(prevState => !prevState);
  };

  return (
    <Wrapper>
      <Label>
        <Search className="word" onClick={handleClickSearch} />
        <input
          type="text"
          name="word"
          value={word}
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
      <RadioWrapper>
        <RadioLabel>
          <input type="radio" name="reason" value="Exams and coursework" />
          <CustomRadioButton>
            <Circle className="selected"></Circle>
          </CustomRadioButton>
          <RadioText>Regular</RadioText>
        </RadioLabel>
        <RadioLabel>
          <input type="radio" name="reason" value="Culture, travel or hobby" />
          <CustomRadioButton>
            <Circle className="selected"></Circle>
          </CustomRadioButton>
          <RadioText>Irregular</RadioText>
        </RadioLabel>
      </RadioWrapper>
    </Wrapper>
  );
};
