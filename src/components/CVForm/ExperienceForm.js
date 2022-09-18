import { useCVDispatch } from '../../contexts/CVContext';

import InputFieldsWrapper from '../UI/InputFieldsWrapper';
import InputRow from '../UI/InputRow';
import Input from '../UI/Input';
import Button from '../UI/Button';
import TextArea from '../UI/TextArea';

const ExperienceForm = ({ experience }) => {
  const dispatch = useCVDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_EXPERIENCE',
      experience: { ...experience, [name]: value },
    });
  };

  const handleDeleteExperience = () => {
    dispatch({
      type: 'DELETE_EXPERIENCE',
      id: experience.id,
    });
  };

  return (
    <InputFieldsWrapper>
      <Input
        type="text"
        name="position"
        placeholder="Position"
        value={experience.position}
        onChange={(e) => handleOnChange(e)}
      />
      <InputRow>
        <Input
          type="text"
          name="company"
          placeholder="Company"
          value={experience.company}
          onChange={(e) => handleOnChange(e)}
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          value={experience.city}
          onChange={(e) => handleOnChange(e)}
        />
      </InputRow>
      <TextArea
        type="text"
        name="description"
        placeholder="Description"
        value={experience.description}
        onChange={(e) => handleOnChange(e)}
      />
      <InputRow>
        <Input
          type="tel"
          name="from"
          placeholder="From"
          value={experience.from}
          onChange={(e) => handleOnChange(e)}
        />
        <Input
          type="tel"
          name="to"
          placeholder="To"
          value={experience.to}
          onChange={(e) => handleOnChange(e)}
        />
      </InputRow>
      <Button
        className="danger"
        onClick={handleDeleteExperience}
        text="Delete"
      />
    </InputFieldsWrapper>
  );
};

export default ExperienceForm;
