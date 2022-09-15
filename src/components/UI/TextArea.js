import classes from './TextArea.module.css';

const TextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      className={classes.textarea}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
