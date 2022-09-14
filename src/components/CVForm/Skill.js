import Input from '../UI/Input';
import classes from './Skill.module.css';

export default function Skill(props) {
  return (
    <div className={classes.skill}>
      <Input
        type="text"
        name={props.skill.title}
        placeholder="Skill"
        value={props.skill.title}
        onChange={props.onSkillNameChange}
      />
      <select name="skill-value" value={props.skill.rating}>
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
