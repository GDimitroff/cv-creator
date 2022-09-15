import { useCV, useCVDispatch } from '../../contexts/CVContext';

import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import classes from './GeneralInfo.module.css';

const GeneralInfo = () => {
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

  return (
    <div className={classes['general-info']}>
      <h3>Personal Information</h3>
      <form>
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
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={generalInfo.title}
          onChange={(e) => handleOnChange(e)}
        />
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
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={generalInfo.address}
          onChange={(e) => handleOnChange(e)}
        />
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
        <TextArea
          name="description"
          placeholder="Description"
          value={generalInfo.description}
          onChange={(e) => handleOnChange(e)}
        />
      </form>
    </div>
  );
};

export default GeneralInfo;
