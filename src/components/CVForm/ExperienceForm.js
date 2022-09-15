import { useCVDispatch } from '../../contexts/CVContext';

import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import classes from './ExperienceForm.module.css';

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
    <form className={classes.form}>
      <Input
        type="text"
        name="position"
        placeholder="Position"
        value={experience.position}
        onChange={(e) => handleOnChange(e)}
      />
      <div className={classes.input}>
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
      </div>
      <TextArea
        type="text"
        name="description"
        placeholder="Description"
        value={experience.description}
        onChange={(e) => handleOnChange(e)}
      />
      <div className={classes.input}>
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
      </div>
      <button
        className={classes.button}
        type="button"
        onClick={handleDeleteExperience}>
        Delete
      </button>
    </form>
  );
};

export default ExperienceForm;
