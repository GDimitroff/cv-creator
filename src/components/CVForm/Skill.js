import { useCVDispatch } from '../../contexts/CVContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

import Input from '../UI/Input';
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
      <FontAwesomeIcon
        icon={faCircleMinus}
        onClick={handleDeleteSkill}
        size="lg"
        className="icon"
      />
    </div>
  );
};

export default Skill;
