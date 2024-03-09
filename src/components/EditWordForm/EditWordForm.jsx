import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { editWord } from 'redux/words/wordsOperations';
import { ReactComponent as Ukrainian } from '../Icons/ukraine.svg';
import { ReactComponent as English } from '../Icons/united-kingdom.svg';
import { ReactComponent as Error } from '../Icons/error.svg';
import { ReactComponent as Success } from '../Icons/success.svg';

import {
  Button,
  ButtonWrapper,
  FormWrapper,
  Label,
  MessageError,
  MessageSuccess,
  TextInput,
  Wrapper,
  WrapperTextAndIcon,
} from './EditWordForm.styled';

const SignupSchema = Yup.object().shape({
  ua: Yup.string()
    .required('Required')
    .matches(/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u, 'Invalid data'),
  en: Yup.string()
    .required('Required')
    .matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/, 'Invalid data'),
});

const EditWordForm = ({ dataModal, closeModal }) => {
  const dispatch = useDispatch();

  const initialValues = {
    ua: dataModal.ua,
    en: dataModal.en,
  };

  const handleSubmit = (values, actions) => {
    const { ua, en } = values;
    let editedWord = null;

    if (dataModal.category === 'verb') {
      editedWord = {
        id: dataModal._id,
        data: {
          ua,
          en,
          category: dataModal.category,
          isIrregular: dataModal.isIrregular,
        },
      };
    } else {
      editedWord = {
        id: dataModal._id,
        data: {
          ua,
          en,
          category: dataModal.category,
        },
      };
    }

    dispatch(editWord(editedWord))
      .then(data => {
        if (data.payload === 'Request failed with status code 400') {
          Notify.failure(`Bad request (invalid request body)`);
          return;
        }

        if (data.payload === 'Request failed with status code 401') {
          Notify.failure(`This word not found`);
          return;
        }

        if (data.payload === 'Request failed with status code 403') {
          Notify.failure(`You don't have right to edit this word`);
          return;
        }

        if (data.payload === 'Request failed with status code 404') {
          Notify.failure(`Service not found`);
          return;
        }

        Notify.success(`The word adited successfully.`);
        closeModal();
      })
      .catch(error => {
        Notify.failure(error);
      });

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, resetForm }) => (
          <FormWrapper>
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
              <Button type="submit" className="save">
                Save
              </Button>
              <Button
                type="button"
                className="cancel"
                onClick={() => {
                  resetForm();
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

export default EditWordForm;
