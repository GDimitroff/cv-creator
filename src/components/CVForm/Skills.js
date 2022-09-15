import { useCV, useCVDispatch } from '../../contexts/CVContext';
import { PlusIcon } from '@heroicons/react/24/solid';

import Skill from './Skill';
import classes from './Skills.module.css';

export default function Skills() {
  const { skills } = useCV();
  const dispatch = useCVDispatch();

  const skillsList = skills.map((skill) => (
    <Skill skill={skill} key={skill.id} />
  ));

  function handleAddNewSkill() {
    dispatch({
      type: 'ADD_SKILL',
    });
  }

  return (
    <div>
      <header className={classes.header}>
        <h3>Skills</h3>
        <PlusIcon onClick={handleAddNewSkill} className={classes.add}/>
      </header>
      <ul className={classes.skills}>{skillsList}</ul>
    </div>
  );
}
