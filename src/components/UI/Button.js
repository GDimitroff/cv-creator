import classes from './Button.module.css';

const Button = ({ onClick, text, className }) => {
  return (
    <button
      className={`${classes.button} ${className ? classes[className] : ''}`}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
