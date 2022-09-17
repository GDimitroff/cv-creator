import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleUp,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';
import classes from './SectionHeader.module.css';

const SectionHeader = ({ text, isShown, onToggleSection }) => {
  return (
    <div className={classes.header} onClick={onToggleSection}>
      <h3>{text}</h3>
      {!isShown && (
        <FontAwesomeIcon icon={faAngleDoubleUp} className="toggle" />
      )}
      {isShown && (
        <FontAwesomeIcon icon={faAngleDoubleDown} className="toggle" />
      )}
    </div>
  );
};

export default SectionHeader;
