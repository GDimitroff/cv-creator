import classes from './InputRow.module.css';

const InputRow = ({ children }) => {
  return <div className={classes.input}>{children}</div>;
};

export default InputRow;
