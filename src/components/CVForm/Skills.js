import Skill from './Skill';

import classes from './Skills.module.css';

export default function Skills(props) {
  const skillsList = props.skills.map((skill) => (
    <Skill
      skill={skill}
      key={skill.id}
      onSkillNameChange={props.onSkillNameChange}
    />
  ));

  function handleAddNewSkill() {
    console.log('add new skill');
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
