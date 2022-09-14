import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p>
        Made with ❤️ by{' '}
        <a
          href="https://github.com/GDimitroff"
          target="_blank"
          rel="noreferrer">
          Gospodin Dimitrov
        </a>
      </p>
    </footer>
  );
}
