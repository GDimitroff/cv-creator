import classes from './InputFieldsWrapper.module.css';

const InputFieldsWrapper = ({ children }) => {
  return <div className={classes.fields}>{children}</div>;
};

export default InputFieldsWrapper;
