import Icon from '../UI/Icon';
import classes from './SectionHeader.module.css';

const SectionHeader = ({ text, isShown, onToggleSection }) => {
  return (
    <div className={classes.header} onClick={onToggleSection}>
      <h3>{text}</h3>
      {!isShown && <Icon iconName="angleUp" className="light" link={false} />}
      {isShown && <Icon iconName="angleDown" className="light" link={false} />}
    </div>
  );
};

export default SectionHeader;
