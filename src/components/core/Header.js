import { useContext } from 'react';

import CVContext from '../../contexts/cv-context';
import logo from '../../assets/logo.png';
import Button from '../UI/Button';
import classes from './Header.module.css';

export default function Header() {
  const ctx = useContext(CVContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="CV Creator" />
      </div>
      <h1 className={classes.title}>CV Creator</h1>
      <div className={classes.actions}>
        <Button onClick={ctx.loadExample} text="LoadExample" />
        <Button onClick={ctx.reset} text="Clear" />
        <Button text="Generate PDF" />
        <Button text="Flip icon" />
      </div>
    </header>
  );
}
