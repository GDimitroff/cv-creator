import { useState } from 'react';

import Icon from '../UI/Icon';
import classes from './Interest.module.css';

const Interest = ({ title, text }) => {
  const [selected, isSelected] = useState(false);

  const classList = `${classes['wrapper']} ${selected ? classes.selected : ''}`;
  const iconColor = selected ? 'light' : 'dark';

  const handleToggle = () => {
    isSelected((prevSelected) => !prevSelected);
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
