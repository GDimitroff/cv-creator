import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Skills from './Skills';
import classes from './CVForm.module.css';

const CVForm = () => {
  return (
    <section className={classes['cv-form']}>
      <GeneralInfo />
      <Education />
      <Skills />
    </section>
  );
};

export default CVForm;
