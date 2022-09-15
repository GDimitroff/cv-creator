import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import classes from './CVForm.module.css';

const CVForm = () => {
  return (
    <section className={classes['cv-form']}>
      <GeneralInfo />
      <Education />
      <Experience />
      <Skills />
    </section>
  );
};

export default CVForm;
