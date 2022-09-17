import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useCV, useCVDispatch } from '../../contexts/CVContext';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import EducationForm from './EducationForm';

const Education = () => {
  const [isShown, setIsShown] = useState(false);
  const { education } = useCV();
  const dispatch = useCVDispatch();

  const handleAddEducation = () => {
    dispatch({
      type: 'ADD_EDUCATION',
    });
  };

  const handleToggleSection = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

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
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="icon flex-start"
            onClick={handleAddEducation}
            size="lg"
          />
          {educationList}
        </SectionWrapper>
      )}
    </div>
  );
};

export default Education;
