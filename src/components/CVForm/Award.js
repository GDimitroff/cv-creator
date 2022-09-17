import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { useCVDispatch } from '../../contexts/CVContext';

import InputRow from '../UI/InputRow';
import Input from '../UI/Input';

const Award = ({ award }) => {
  const dispatch = useCVDispatch();

  const handleChangeAward = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_AWARD',
      award: { ...award, [name]: value },
    });
  };

  const handleDeleteAward = () => {
    dispatch({
      type: 'DELETE_AWARD',
      id: award.id,
    });
  };

  return (
    <InputRow>
      <Input
        type="text"
        name="title"
        placeholder="Award"
        value={award.title}
        onChange={handleChangeAward}
      />
      <Input
        type="text"
        name="organization"
        placeholder="Organization"
        value={award.organization}
        onChange={handleChangeAward}
      />
      <Input
        type="tel"
        name="year"
        placeholder="Year"
        value={award.year}
        onChange={handleChangeAward}
      />
      <FontAwesomeIcon
        icon={faCircleMinus}
        onClick={handleDeleteAward}
        size="lg"
        className="icon"
      />
    </InputRow>
  );
};

export default Award;
