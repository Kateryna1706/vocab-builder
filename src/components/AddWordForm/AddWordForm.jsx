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
import { ReactComponent as Error } from '../Icons/error.svg';
import { ReactComponent as Success } from '../Icons/success.svg';
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
  MessageError,
  MessageSuccess,
  RadioLabel,
  RadioText,
  RadioWrapper,
  TextInput,
  Wrapper,
  WrapperTextAndIcon,
} from './AddWordForm.styled';

const initialValues = {
  ua: '',
  en: '',
};

const SignupSchema = Yup.object().shape({
  // category: Yup.string().required('Required'),
  verb: Yup.string(),
  ua: Yup.string()
    .required('Required')
    .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, 'Invalid data'),
  en: Yup.string()
    .required('Required')
    .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, 'Invalid data'),
});

const AddWordForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [category, setCategory] = useState('');
  const [isVerb, setIsVerb] = useState(false);
  const [isVerbIrregular, setIsVerbIrregular] = useState(false);

  const handleClickDropDown = () => {
    setVisibleDropdown(prevState => !prevState);
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
    setIsVerbIrregular(value === 'irregular');
  };

  const handleSubmit = (values, actions) => {
    const { verb, ua, en } = values;

    let newWord = null;

    if (isVerb) {
      const isIrregular = verb === 'irregular';
      newWord = {
        ua,
        en,
        category,
        isIrregular,
      };
    }

    if (!isVerb) {
      newWord = {
        ua,
        en,
        category,
      };
    }

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
    <div>
      <Label className="categoryLabel" $isVerb={isVerb}>
        <Vector onClick={handleClickDropDown} className="vector" />
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
              <DropdownItem key={index} onClick={handleClickCategory}>
                {item}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </Label>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, resetForm }) => (
          <FormWrapper>
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
              <Label className="wordLabel">
                <WrapperTextAndIcon>
                  <Ukrainian />
                  <TextInput>Ukrainian</TextInput>
                </WrapperTextAndIcon>
                <div>
                  <Field
                    type="text"
                    name="ua"
                    style={{
                      borderColor:
                        (touched.ua && errors.ua && '#d80027') ||
                        (touched.ua && !errors.ua && '#3cbf61'),
                    }}
                    className="wordInput"
                  />
                  {errors.ua && touched.ua && (
                    <MessageError>
                      <Error />
                      <span>{errors.ua}</span>
                    </MessageError>
                  )}
                  {!errors.ua && touched.ua && (
                    <MessageSuccess>
                      <Success />
                      <span>Valid data</span>
                    </MessageSuccess>
                  )}
                </div>
              </Label>
              <Label className="wordLabel">
                <WrapperTextAndIcon>
                  <English />
                  <TextInput>English</TextInput>
                </WrapperTextAndIcon>
                <div>
                  <Field
                    type="text"
                    name="en"
                    style={{
                      borderColor:
                        (touched.en && errors.en && '#d80027') ||
                        (touched.en && !errors.en && '#3cbf61'),
                    }}
                    className="wordInput"
                  />
                  {errors.en && touched.en && (
                    <MessageError>
                      <Error />
                      <span>{errors.en}</span>
                    </MessageError>
                  )}
                  {!errors.en && touched.en && (
                    <MessageSuccess>
                      <Success />
                      <span>Valid data</span>
                    </MessageSuccess>
                  )}
                </div>
              </Label>
            </Wrapper>
            <ButtonWrapper>
              <Button type="submit" className="add">
                Add
              </Button>
              <Button
                type="button"
                className="cancel"
                onClick={() => {
                  resetForm();
                  setCategory('');
                  setIsVerb(false);
                  setIsVerbIrregular(false);
                }}
              >
                Cancel
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        )}
      </Formik>
    </div>
  );
};

export default AddWordForm;
