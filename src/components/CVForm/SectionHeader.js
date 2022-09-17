import classes from './SectionHeader.module.css';

const SectionHeader = ({ text, isShown, onToggleSection }) => {
  return (
    <div className={classes.header} onClick={onToggleSection}>
      <h3>{text}</h3>
      {/* {!isShown && <ChevronDownIcon className={classes.toggle} />} */}
      {/* {isShown && <ChevronUpIcon className={classes.toggle} />} */}
    </div>
  );
};

export default SectionHeader;
