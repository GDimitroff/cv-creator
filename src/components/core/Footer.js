import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        Made with 🤍 by{' '}
        <a
          href="https://github.com/GDimitroff"
          target="_blank"
          rel="noreferrer">
          Gospodin Dimitrov
        </a>
      </p>
    </footer>
  );
};

export default Footer;
