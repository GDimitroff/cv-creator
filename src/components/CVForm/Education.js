import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import EducationForm from './EducationForm';
import Icon from '../UI/Icon';

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
          <Icon
            iconName="plus"
            onClick={handleAddEducation}
            size="lg"
            className="dark"
            link={true}
          />
          {educationList}
        </SectionWrapper>
      )}
    </div>
  );
};

export default Education;
