import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useCV, useCVDispatch } from '../../contexts/CVContext';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import ExperienceForm from './ExperienceForm';

const Experience = () => {
  const [isShown, setIsShown] = useState(false);
  const { experience } = useCV();
  const dispatch = useCVDispatch();

  const handleAddExperience = () => {
    dispatch({
      type: 'ADD_EXPERIENCE',
    });
  };

  const handleToggleSection = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

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
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="icon flex-start"
            onClick={handleAddExperience}
            size="lg"
          />
          {experienceList}
        </SectionWrapper>
      )}
    </div>
  );
};

export default Experience;
