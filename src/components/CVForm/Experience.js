import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import ExperienceForm from './ExperienceForm';
import Icon from '../UI/Icon';

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
          <Icon
            iconName="plus"
            onClick={handleAddExperience}
            size="lg"
            className="dark"
            link={true}
          />
          {experienceList}
        </SectionWrapper>
      )}
    </div>
  );
};

export default Experience;
