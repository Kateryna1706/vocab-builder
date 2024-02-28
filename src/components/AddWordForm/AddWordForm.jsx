import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectCategories } from 'redux/words/wordsSelectors';
import { createWord } from 'redux/words/wordsOperations';
import { ReactComponent as Vector } from '../Icons/vector.svg';
import { ReactComponent as Ukrainian } from '../Icons/ukraine.svg';
import { ReactComponent as English } from '../Icons/united-kingdom.svg';
import { changeFilter } from 'redux/words/filterSlice';
import {
  Button,
  ButtonWrapper,
  Circle,
  CustomRadioButton,
  Dropdown,
  DropdownItem,
  FormWrapper,
  IrregularText,
  Label,
  RadioLabel,
  RadioText,
  RadioWrapper,
  TextInput,
  Wrapper,
  WrapperTextAndIcon,
} from './AddWordForm.styled';

const initialValues = {
  ukrainian: '',
  english: '',
  category: '',
};

const SignupSchema = Yup.object().shape({
  ukrainian: Yup.string().required('Required'),
  english: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  verb: Yup.string().required('Required'),
});

const AddWordForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [category, setCategory] = useState('');
  const [ukrainian, setUkrainian] = useState('');
  const [english, setEnglish] = useState('');
  const [isVerb, setIsVerb] = useState(false);
  const [isVerbIrregular, setIsVerbIrregular] = useState(false);

  const handleClickDropDown = () => {
    setVisibleDropdown(prevState => !prevState);
  };

  const handleUkrainianWord = event => {
    const { value } = event.currentTarget;
    setUkrainian(value);
  };

  const handleEnglishWord = event => {
    const { value } = event.currentTarget;
    setEnglish(value);
  };

  const handleClickCategory = event => {
    const value = event.currentTarget.innerHTML;
    setCategory(value);
    setIsVerb(value === 'verb');
    dispatch(changeFilter({ category: value }));
    setVisibleDropdown(prevState => !prevState);
  };

  const handleCategoryFilterChange = event => {
    const { value } = event.currentTarget;
    setCategory(value);
  };

  const handleClickVerb = event => {
    const { value } = event.currentTarget;
    console.log(value === 'irregular');
    setIsVerbIrregular(value === 'irregular');
  };

  const handleSubmit = (values, actions) => {
    const { category, verb, ukrainian, english } = values;
    console.log(verb === 'irregular');

    const isIrregular = verb === 'irregular';
    const newWord = {
      ukrainian,
      english,
      category,
      isIrregular,
    };

    dispatch(createWord(newWord))
      .then(data => {
        if (data.payload === 'Request failed with status code 400') {
          Notify.failure(`Bad request (invalid request body)`);
          return;
        }

        if (data.payload === 'Request failed with status code 401') {
          Notify.failure(`Such a word exists`);
          return;
        }

        if (data.payload === 'Request failed with status code 404') {
          Notify.failure(`Service not found`);
          return;
        }

        Notify.success(`New word added successfully.`);
      })
      .catch(error => {
        Notify.failure(error);
      });

    actions.resetForm();
    closeModal();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <Label className="categoryLabel" $isVerb={isVerb}>
            <Vector onClick={handleClickDropDown} className="vector" />
            <Field
              type="text"
              name="category"
              value={category}
              disabled
              className="category"
              onChange={handleCategoryFilterChange}
            />
            {visibleDropdown && (
              <Dropdown>
                {categories.map((item, index) => (
                  <DropdownItem key={index} onClick={handleClickCategory}>
                    {item}
                  </DropdownItem>
                ))}
              </Dropdown>
            )}
          </Label>
          {isVerb && (
            <RadioWrapper $isVerbIrregular={isVerbIrregular}>
              <RadioLabel>
                <Field
                  type="radio"
                  name="verb"
                  value="regular"
                  onClick={handleClickVerb}
                />
                <CustomRadioButton>
                  <Circle className="selected"></Circle>
                </CustomRadioButton>
                <RadioText>Regular</RadioText>
              </RadioLabel>
              <RadioLabel>
                <Field
                  type="radio"
                  name="verb"
                  value="irregular"
                  onClick={handleClickVerb}
                />
                <CustomRadioButton>
                  <Circle className="selected"></Circle>
                </CustomRadioButton>
                <RadioText>Irregular</RadioText>
              </RadioLabel>
            </RadioWrapper>
          )}
          {isVerbIrregular && isVerb && (
            <IrregularText>
              Such data must be entered in the format I form-II form-III form.
            </IrregularText>
          )}
          <Wrapper>
            <Label>
              <WrapperTextAndIcon>
                <Ukrainian />
                <TextInput>Ukrainian</TextInput>
              </WrapperTextAndIcon>
              <Field
                type="text"
                name="ukrainian"
                value={ukrainian}
                onChange={handleUkrainianWord}
              />
            </Label>
            <Label>
              <WrapperTextAndIcon>
                <English />
                <TextInput>English</TextInput>
              </WrapperTextAndIcon>
              <Field
                type="text"
                name="english"
                value={english}
                onChange={handleEnglishWord}
              />
            </Label>
          </Wrapper>
          <ButtonWrapper>
            <Button type="submit" className="add">
              Add
            </Button>
            <Button type="button" className="cancel">
              Cancel
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default AddWordForm;
