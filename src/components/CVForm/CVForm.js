import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Awards from './Awards';
import Interests from './Interests';
import classes from './CVForm.module.css';

const CVForm = () => {
  return (
    <section className={classes['cv-form']}>
      <GeneralInfo />
      <Skills />
      <Education />
      <Experience />
      <Awards />
      <Interests />
    </section>
  );
};

export default CVForm;
