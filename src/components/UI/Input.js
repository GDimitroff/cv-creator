import classes from './Input.module.css';

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  maxLength,
  label,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.input}>
        <input
          className={classes['input-field']}
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
        <label htmlFor={name} className={classes['input-label']}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default Input;
