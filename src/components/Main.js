import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import classes from './Main.module.css';

export default function Main() {
  return (
    <main className={classes.main}>
      <CVForm />
      <CVPreview />
    </main>
  );
}
