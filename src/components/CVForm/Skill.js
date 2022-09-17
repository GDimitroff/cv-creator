import { useCVDispatch } from '../../contexts/CVContext';

import Input from '../UI/Input';
import Icon from '../UI/Icon';
import classes from './Skill.module.css';

const Skill = ({ skill }) => {
  const dispatch = useCVDispatch();

  const handleChangeSkill = (e) => {
    const { name, value } = e.target;
    const field = name === 'skill-name' ? 'title' : 'rating';

    dispatch({
      type: 'CHANGE_SKILL',
      skill: { ...skill, [field]: value },
    });
  };

  const handleDeleteSkill = () => {
    dispatch({
      type: 'DELETE_SKILL',
      id: skill.id,
    });
  };

  return (
    <div className={classes.skill}>
      <Input
        type="text"
        name="skill-name"
        placeholder="Skill"
        value={skill.title}
        onChange={handleChangeSkill}
      />
      <select
        name="skill-rating"
        value={skill.rating}
        onChange={handleChangeSkill}>
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
      <Icon
        iconName="minus"
        onClick={handleDeleteSkill}
        size="lg"
        className="dark"
        link={true}
      />
    </div>
  );
};

export default Skill;
