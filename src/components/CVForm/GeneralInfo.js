import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';

import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import SectionHeader from './SectionHeader';
import FormWrapper from './FormWrapper';
import classes from './GeneralInfo.module.css';

const GeneralInfo = () => {
  const [isShown, setIsShown] = useState(false);
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

  function handleToggleSection() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  return (
    <div>
      <SectionHeader
        text="Personal Information"
        onToggleSection={handleToggleSection}
        isShown={isShown}
      />
      {isShown && (
        <FormWrapper>
          <div className={classes.input}>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={generalInfo.firstName}
              onChange={(e) => handleOnChange(e)}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={generalInfo.lastName}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={generalInfo.title}
            onChange={(e) => handleOnChange(e)}
          />
          <div className={classes.input}>
            <Input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={generalInfo.phoneNumber}
              onChange={(e) => handleOnChange(e)}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={generalInfo.email}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <Input
            type="text"
            name="address"
            placeholder="Address"
            value={generalInfo.address}
            onChange={(e) => handleOnChange(e)}
          />
          <div className={classes.input}>
            <Input
              type="text"
              name="linkedIn"
              placeholder="LinkedIn"
              value={generalInfo.linkedIn}
              onChange={(e) => handleOnChange(e)}
            />
            <Input
              type="text"
              name="facebook"
              placeholder="Facebook"
              value={generalInfo.facebook}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <TextArea
            name="description"
            placeholder="Description"
            value={generalInfo.description}
            onChange={(e) => handleOnChange(e)}
          />
        </FormWrapper>
      )}
    </div>
  );
};

export default GeneralInfo;
