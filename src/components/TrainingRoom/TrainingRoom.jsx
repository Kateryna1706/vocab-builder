import {
  Button,
  ButtonNext,
  ButtonWrapper,
  TextIcon,
  Wrapper,
  WrapperEnglishWord,
  WrapperTextAndIcon,
  WrapperTraining,
  WrapperTranslation,
} from './TrainingRoom.styled';

import { useState } from 'react';

import { ReactComponent as Ukrainian } from '../Icons/ukraine.svg';
import { ReactComponent as English } from '../Icons/united-kingdom.svg';
import { ReactComponent as Switch } from '../Icons/switch-horizontal.svg';

const TrainingRoom = () => {
  const [translation, setTranslation] = useState('Введіть переклад');

  const handleChangeInput = event => {
    const { value } = event.currentTarget;
    setTranslation(value);
  };

  const handleClickSave = () => {};

  return (
    <WrapperTraining>
      <Wrapper>
        <WrapperTranslation>
          <div className="position">
            <input
              value={translation}
              onChange={handleChangeInput}
              onFocus={() => setTranslation('')}
              onBlur={() =>
                translation !== '' ? null : setTranslation('Введіть переклад')
              }
            />

            <ButtonNext>
              <span>Next</span>
              <Switch />
            </ButtonNext>
          </div>
          <WrapperTextAndIcon>
            <Ukrainian />
            <TextIcon>Ukrainian</TextIcon>
          </WrapperTextAndIcon>
        </WrapperTranslation>
        <WrapperEnglishWord>
          <span className="word">Break in</span>
          <WrapperTextAndIcon>
            <English />
            <TextIcon>English</TextIcon>
          </WrapperTextAndIcon>
        </WrapperEnglishWord>
      </Wrapper>
      <ButtonWrapper>
        <Button type="submit" onClick={handleClickSave} className="save">
          Save
        </Button>
        <Button type="button" onClick={() => {}} className="cancel">
          Cancel
        </Button>
      </ButtonWrapper>
    </WrapperTraining>
  );
};

export default TrainingRoom;
