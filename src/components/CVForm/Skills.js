import { useState } from 'react';
import Skill from './Skill';

import classes from './Skills.module.css';

export default function Skills(props) {
  const [count, setCount] = useState(1);

  const skillsList = [];
  for (let i = 0; i < count; i++) {
    skillsList.push(<Skill />);
  }

  function handleAddNewSkill() {
    setCount((oldCount) => oldCount + 1);
  }

  return (
    <div>
      <header className={classes.header}>
        <h3>Skills</h3>
        <button onClick={handleAddNewSkill}>+</button>
      </header>
      {skillsList}
    </div>
  );
}
