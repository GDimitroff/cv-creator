import { useCVDispatch } from '../../contexts/CVContext';

import InputRow from '../UI/InputRow';
import Input from '../UI/Input';
import Icon from '../UI/Icon';

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
      <Icon
        iconName="minus"
        onClick={handleDeleteAward}
        size="lg"
        className="dark"
        link={true}
      />
    </InputRow>
  );
};

export default Award;
