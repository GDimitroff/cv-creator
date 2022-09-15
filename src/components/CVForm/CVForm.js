import Skills from './Skills';
import GeneralInfo from './GeneralInfo';
import classes from './CVForm.module.css';

export default function CVForm() {
  return (
    <section className={classes['cv-form']}>
      <GeneralInfo />
      <Skills />
    </section>
  );
}
