import { useCVDispatch } from '../../contexts/CVContext';

import Input from '../UI/Input';
import classes from './EducationForm.module.css';

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
    <form className={classes.form}>
      <div className={classes.input}>
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
      </div>
      <div className={classes.input}>
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
      </div>
      <div className={classes.input}>
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
      </div>
      <button
        className={classes.button}
        type="button"
        onClick={handleDeleteEducation}>
        Delete
      </button>
    </form>
  );
};

export default EducationForm;