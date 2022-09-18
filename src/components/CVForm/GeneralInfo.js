import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import InputFieldsWrapper from '../UI/InputFieldsWrapper';
import InputRow from '../UI/InputRow';
import Input from '../UI/Input';
import TextArea from '../UI/TextArea';

const GeneralInfo = () => {
  const [isShown, setIsShown] = useState(true);
  const { generalInfo } = useCV();
  const dispatch = useCVDispatch();

  function handleOnChange(e) {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_GENERAL_INFO',
      name,
      value,
    });
  }

  const handleToggleSection = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

  return (
    <div>
      <SectionHeader
        text="Personal Information"
        onToggleSection={handleToggleSection}
        isShown={isShown}
      />
      {isShown && (
        <SectionWrapper>
          <InputFieldsWrapper>
            <InputRow>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={generalInfo.firstName}
                onChange={(e) => handleOnChange(e)}
                maxLength="15"
                label="First Name"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={generalInfo.lastName}
                onChange={(e) => handleOnChange(e)}
                maxLength="15"
                label="Last Name"
              />
            </InputRow>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={generalInfo.title}
              onChange={(e) => handleOnChange(e)}
              maxLength="50"
              label="Title"
            />
            <InputRow>
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={generalInfo.phoneNumber}
                onChange={(e) => handleOnChange(e)}
                maxLength="20"
                label="Phone"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={generalInfo.email}
                onChange={(e) => handleOnChange(e)}
                maxLength="25"
                label="Email"
              />
            </InputRow>
            <Input
              type="text"
              name="address"
              placeholder="Address"
              value={generalInfo.address}
              onChange={(e) => handleOnChange(e)}
              maxLength="40"
              label="Address"
            />
            <InputRow>
              <Input
                type="text"
                name="linkedIn"
                placeholder="LinkedIn"
                value={generalInfo.linkedIn}
                onChange={(e) => handleOnChange(e)}
                maxLength="40"
                label="LinkedIn"
              />
              <Input
                type="text"
                name="facebook"
                placeholder="Facebook"
                value={generalInfo.facebook}
                onChange={(e) => handleOnChange(e)}
                maxLength="40"
                label="Facebook"
              />
            </InputRow>
            <TextArea
              name="description"
              placeholder="Description"
              value={generalInfo.description}
              onChange={(e) => handleOnChange(e)}
              maxLength="600"
            />
          </InputFieldsWrapper>
        </SectionWrapper>
      )}
    </div>
  );
};

export default GeneralInfo;
