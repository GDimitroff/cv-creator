import { useCV, useCVDispatch } from '../../contexts/CVContext';

import Icon from '../UI/Icon';
import classes from './Interest.module.css';

const Interest = ({ title, text }) => {
  const { interests } = useCV();
  const dispatch = useCVDispatch();

  const selected = interests.includes(title);
  const classList = `${classes['wrapper']} ${selected ? classes.selected : ''}`;
  const iconColor = selected ? 'light' : 'dark';

  const handleToggle = () => {
    selected
      ? dispatch({
          type: 'DELETE_INTEREST',
          title,
        })
      : dispatch({
          type: 'ADD_INTEREST',
          title,
        });
  };

  return (
    <div className={classes.panel}>
      <div className={classList} onClick={handleToggle}>
        <Icon iconName={title} size="1x" link={false} className={iconColor} />
      </div>
      <p className={classes.title}>{text}</p>
    </div>
  );
};

export default Interest;
