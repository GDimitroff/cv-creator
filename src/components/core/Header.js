import { useCVDispatch } from '../../contexts/CVContext';

import logo from '../../assets/logo.png';
import Button from '../UI/Button';
import classes from './Header.module.css';

export default function Header() {
  const dispatch = useCVDispatch();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="CV Creator" />
      </div>
      <h1 className={classes.title}>CV Creator</h1>
      <div className={classes.actions}>
        <Button
          onClick={() => dispatch({ type: 'LOAD_EXAMPLE_CV' })}
          text="Load Example"
        />
        <Button
          onClick={() => dispatch({ type: 'LOAD_EMPTY_CV' })}
          text="Clear"
        />
        <Button text="Generate PDF" />
        <Button text="Flip icon" />
      </div>
    </header>
  );
}
