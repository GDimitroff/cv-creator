import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import classes from './SectionHeader.module.css';

const SectionHeader = ({ text, isShown, onToggleSection }) => {
  return (
    <div className={classes.header} onClick={onToggleSection}>
      <h3>{text}</h3>
      {!isShown && (
        <FontAwesomeIcon
          icon={faCircleChevronDown}
          className="toggle"
          size="lg"
        />
      )}
      {isShown && (
        <FontAwesomeIcon
          icon={faCircleChevronUp}
          className="toggle"
          size="lg"
        />
      )}
    </div>
  );
};

export default SectionHeader;
