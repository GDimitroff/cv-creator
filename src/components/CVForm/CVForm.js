import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Skills from './Skills';
import classes from './CVForm.module.css';

const CVForm = () => {
  return (
    <section className={classes['cv-form']}>
      <GeneralInfo />
      <hr />
      <Education/>
      <hr />
      <Skills />
    </section>
  );
};

export default CVForm;
