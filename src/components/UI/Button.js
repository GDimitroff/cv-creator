import classes from './Button.module.css';

export default function Button({ onClick, text }) {
  return (
    <button className={classes.button} onClick={onClick}>
      {text}
    </button>
  );
}
