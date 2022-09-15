import { useCV, useCVDispatch } from '../../contexts/CVContext';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

import EducationForm from './EducationForm';
import classes from './Education.module.css';

const Education = () => {
  const { education } = useCV();
  const dispatch = useCVDispatch();

  const handleAddEducation = () => {
    dispatch({
      type: 'ADD_EDUCATION',
    });
  };

  const educationList = education.map((e) => {
    return <EducationForm education={e} key={e.id} />;
  });

  return (
    <div>
      <header className={classes.header}>
        <h3>Education</h3>
        <PlusCircleIcon onClick={handleAddEducation} className={classes.add} />
      </header>
      <div className={classes.education}>{educationList}</div>
    </div>
  );
};

export default Education;
