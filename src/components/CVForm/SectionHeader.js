import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/24/solid';
import classes from './SectionHeader.module.css';

const SectionHeader = (props) => {
  return (
    <div className={classes.header} onClick={props.onToggleSection}>
      <h3>{props.text}</h3>
      {!props.isShown && <ChevronDoubleDownIcon className={classes.toggle} />}
      {props.isShown && <ChevronDoubleUpIcon className={classes.toggle} />}
    </div>
  );
};

export default SectionHeader;
