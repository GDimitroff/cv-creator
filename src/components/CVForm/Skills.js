import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import InputFieldsWrapper from '../UI/InputFieldsWrapper';
import { PlusIcon } from '../UI/Icons';
import Skill from './Skill';

const Skills = () => {
  const [isShown, setIsShown] = useState(false);
  const { skills } = useCV();
  const dispatch = useCVDispatch();

  const skillsList = skills.map((skill) => (
    <Skill skill={skill} key={skill.id} />
  ));

  const handleAddNewSkill = () => {
    dispatch({
      type: 'ADD_SKILL',
    });
  };

  const handleToggleSection = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

  return (
    <div>
      <SectionHeader
        text="Skills"
        onToggleSection={handleToggleSection}
        isShown={isShown}
      />
      {isShown && (
        <SectionWrapper>
          <PlusIcon onClick={handleAddNewSkill} />
          <InputFieldsWrapper>{skillsList}</InputFieldsWrapper>
        </SectionWrapper>
      )}
    </div>
  );
};

export default Skills;
