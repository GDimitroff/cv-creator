import classes from './SectionWrapper.module.css';

const SectionWrapper = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default SectionWrapper;
