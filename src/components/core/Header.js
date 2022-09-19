import Button from '../UI/Button';
import classes from './Header.module.css';

const Header = ({ onPrint }) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>CV Creator</h1>
      <Button text="Generate PDF" onClick={onPrint} />
    </header>
  );
};

export default Header;
