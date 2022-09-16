import { useCVDispatch } from '../../contexts/CVContext';

import InputFieldsWrapper from '../UI/InputFieldsWrapper';
import InputRow from '../UI/InputRow';
import Input from '../UI/Input';
import Button from '../UI/Button';

const EducationForm = ({ education }) => {
  const dispatch = useCVDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_EDUCATION',
      education: { ...education, [name]: value },
    });
  };

  const handleDeleteEducation = () => {
    dispatch({
      type: 'DELETE_EDUCATION',
      id: education.id,
    });
  };

  return (
    <InputFieldsWrapper>
      <InputRow>
        <Input
          type="text"
          name="universityName"
          placeholder="University"
          value={education.universityName}
          onChange={(e) => handleOnChange(e)}
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          value={education.city}
          onChange={(e) => handleOnChange(e)}
        />
      </InputRow>
      <InputRow>
        <Input
          type="text"
          name="degree"
          placeholder="Degree"
          value={education.degree}
          onChange={(e) => handleOnChange(e)}
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={education.subject}
          onChange={(e) => handleOnChange(e)}
        />
      </InputRow>
      <InputRow>
        <Input
          type="tel"
          name="from"
          placeholder="From"
          value={education.from}
          onChange={(e) => handleOnChange(e)}
        />
        <Input
          type="tel"
          name="to"
          placeholder="To"
          value={education.to}
          onChange={(e) => handleOnChange(e)}
        />
      </InputRow>
      <Button className="alt" onClick={handleDeleteEducation} text="Delete" />
    </InputFieldsWrapper>
  );
};

export default EducationForm;
