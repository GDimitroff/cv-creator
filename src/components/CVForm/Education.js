import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import EducationForm from './EducationForm';
import classes from './Education.module.css';

const Education = () => {
  const [isShown, setIsShown] = useState(false);
  const { education } = useCV();
  const dispatch = useCVDispatch();

  const handleAddEducation = () => {
    dispatch({
      type: 'ADD_EDUCATION',
    });
  };

  function handleToggleSection() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  const educationList = education.map((edu) => {
    return <EducationForm education={edu} key={edu.id} />;
  });

  return (
    <div>
      <SectionHeader
        text="Education"
        onToggleSection={handleToggleSection}
        isShown={isShown}
      />
      {isShown && (
        <SectionWrapper>
          <PlusCircleIcon
            onClick={handleAddEducation}
            className={classes.add}
          />
          {educationList}
        </SectionWrapper>
      )}
    </div>
  );
};

export default Education;
