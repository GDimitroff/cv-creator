import classes from './Input.module.css';

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      className={classes.input}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
