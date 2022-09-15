import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import classes from './Main.module.css';

const Main = () => {
  return (
    <main className={classes.main}>
      <CVForm />
      <CVPreview />
    </main>
  );
};

export default Main;
