import { useCVDispatch } from '../../contexts/CVContext';

import Input from '../UI/Input';
import classes from './Skill.module.css';

export default function Skill({ skill }) {
  const dispatch = useCVDispatch();

  const handleChangeSkillName = (e) => {
    //FIXME: not working
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_SKILL_NAME',
      skill: { id: skill.id, name, value },
    });
  };

  return (
    <div className={classes.skill}>
      <Input
        type="text"
        name={skill.title}
        placeholder="Skill"
        value={skill.title}
        onChange={handleChangeSkillName}
      />
      <select name="skill-value" value={skill.rating}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}
