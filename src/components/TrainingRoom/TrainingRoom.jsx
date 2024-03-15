import {
  Button,
  ButtonNext,
  ButtonWrapper,
  TextIcon,
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
      <div>
        <WrapperTranslation>
          <input
            value={translation}
            onChange={handleChangeInput}
            onFocus={() => setTranslation('')}
          />
          <div>
            <ButtonNext>
              <span>Next</span>
              <Switch />
            </ButtonNext>
            <WrapperTextAndIcon>
              <Ukrainian />
              <TextIcon>Ukrainian</TextIcon>
            </WrapperTextAndIcon>
          </div>
        </WrapperTranslation>
        <WrapperEnglishWord>
          <span className="word">Break in</span>
          <WrapperTextAndIcon>
            <English />
            <TextIcon>English</TextIcon>
          </WrapperTextAndIcon>
        </WrapperEnglishWord>
      </div>
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
