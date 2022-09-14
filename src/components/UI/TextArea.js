import classes from './TextArea.module.css';

export default function TextArea({ name, placeholder, value, onChange }) {
  return (
    <textarea
      className={classes.textarea}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}