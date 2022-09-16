import { ChevronDownIcon, ChevronUpIcon } from '../UI/Icons';
import classes from './SectionHeader.module.css';

const SectionHeader = (props) => {
  return (
    <div className={classes.header} onClick={props.onToggleSection}>
      <h3>{props.text}</h3>
      {!props.isShown && <ChevronDownIcon className={classes.toggle} />}
      {props.isShown && <ChevronUpIcon className={classes.toggle} />}
    </div>
  );
};

export default SectionHeader;
