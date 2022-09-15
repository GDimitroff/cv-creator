import { useCV, useCVDispatch } from '../../contexts/CVContext';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

import ExperienceForm from './ExperienceForm';
import classes from './Experience.module.css';

const Experience = () => {
  const { experience } = useCV();
  const dispatch = useCVDispatch();

  const handleAddExperience = () => {
    dispatch({
      type: 'ADD_EXPERIENCE',
    });
  };

  const educationList = experience.map((e) => {
    return <ExperienceForm experience={e} key={e.id} />;
  });

  return (
    <div>
      <header className={classes.header}>
        <h3>Experience</h3>
        <PlusCircleIcon onClick={handleAddExperience} className={classes.add} />
      </header>
      <div className={classes.education}>{educationList}</div>
    </div>
  );
};

export default Experience;
