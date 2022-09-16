import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import ExperienceForm from './ExperienceForm';
import classes from './Experience.module.css';

const Experience = () => {
  const [isShown, setIsShown] = useState(false);
  const { experience } = useCV();
  const dispatch = useCVDispatch();

  const handleAddExperience = () => {
    dispatch({
      type: 'ADD_EXPERIENCE',
    });
  };

  function handleToggleSection() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  const experienceList = experience.map((exp) => {
    return <ExperienceForm experience={exp} key={exp.id} />;
  });

  return (
    <div>
      <SectionHeader
        text="Experience"
        onToggleSection={handleToggleSection}
        isShown={isShown}
      />
      {isShown && (
        <SectionWrapper>
          <PlusCircleIcon
            onClick={handleAddExperience}
            className={classes.add}
          />
          {experienceList}
        </SectionWrapper>
      )}
    </div>
  );
};

export default Experience;
