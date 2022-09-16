import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import InputFieldsWrapper from '../UI/InputFieldsWrapper';
import Skill from './Skill';
import classes from './Skills.module.css';

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
          <PlusCircleIcon onClick={handleAddNewSkill} className={classes.add} />
          <InputFieldsWrapper>{skillsList}</InputFieldsWrapper>
        </SectionWrapper>
      )}
    </div>
  );
};

export default Skills;
