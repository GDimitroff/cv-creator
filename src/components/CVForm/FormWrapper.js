import classes from './FormWrapper.module.css';

const FormWrapper = ({ children }) => {
  return <form className={classes.form}>{children}</form>;
};

export default FormWrapper;
