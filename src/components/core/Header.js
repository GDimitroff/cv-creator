import logo from '../../assets/logo.png';
import Button from '../UI/Button';
import classes from './Header.module.css';

const Header = ({ onPrint }) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="CV Creator" />
      </div>
      <h1 className={classes.title}>CV Creator</h1>
      <Button text="Generate PDF" onClick={onPrint} />
    </header>
  );
};

export default Header;
