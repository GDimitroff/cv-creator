import { useCV, useCVDispatch } from '../../contexts/CVContext';

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
        <button onClick={handleAddNewSkill}>+</button>
      </header>
      <ul className={classes.skills}>{skillsList}</ul>
    </div>
  );
}
